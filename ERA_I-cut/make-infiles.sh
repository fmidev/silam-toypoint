#!/bin/sh

##for s in ml sfc.bz2; do s3cmd get s3://Meteo-ERA-Interim-ML/2017/era_interim_2017010112+12.$s ./; done

for f in glob/*; do
  outf=`basename $f | sed -e s/era_interim_/era_interim_europe_/`
  cdo  remapnn,grid $f $outf.tmp;
  grib_set -s editionNumber=1,latitudeOfLastGridPointInDegrees=58.32  $outf.tmp $outf
done
