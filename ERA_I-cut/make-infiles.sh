#!/bin/sh

if false; then
  mkdir -p  glob
  for dd in era_interim_2017010100+06  era_interim_2017010100+12 era_interim_2017010112+06 era_interim_2017010112+12; do

    for s in ml sfc.bz2; do 
        s3cmd get s3://Meteo-ERA-Interim-ML/2017/$dd.$s ./glob/; 
    done
  done
  s3cmd get s3://Meteo-ERA-Interim-ML/era_interim_1980010100+000.sfc  glob/era_interim_1980010100+0.sfc
  lbzip2 -d glob/*.bz2
fi


for f in glob/*; do
  outf=`basename $f | sed -e s/era_interim_/era_interim_europe_/`
  cdo  remapnn,grid $f $outf.tmp;
  grib_set -s editionNumber=1,jScansPositively=0  $outf.tmp $outf
done
