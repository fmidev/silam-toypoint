#!/usr/bin/grads -bqpc
sp='PM_m20'
*sp='PM_m6_0'
*sp='passive_gas'
infile ='output/toypoint.nc'
outDir ='picsPoint'

'reinit'

*'quit'
'sdfopen 'infile

'set gxout grfill'

'colors def_lowwhite'
'!mkdir -p 'outDir

'q file'
dimline=sublin(result,5)
nT=subwrd(dimline,12) 


t =  1 
while (t<=nT)
  
  'set t 't
  'q dims'
  dateline = sublin(result,5)
  datetime = subwrd(dateline,6)
  time = substr(datetime,1,2)
  date = substr(datetime,4,11)
  
  'set grads off'
  'set clevs .1 .2 .5 1 2 5 10 20 50 100 200'
  'set grads off'
  'd cnc_'sp'*1e9'
  'cbar'
  'draw title 'sp' 'time':00, 'date

   pic=outDir'/'sp'_'math_format("%03g",t)'.png'
  'printim 'pic' white x600 y800'
  say pic
  'c'
  t = t + 1
*  break
endwhile
*  '!xli 'pic
'quit'


