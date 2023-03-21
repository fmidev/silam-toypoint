#!/usr/bin/grads -bqpc
sp='PM_m20'
#sp='PM_m6_0'
#sp='passive_gas'
infile ='output/toypoint.nc'
outDir ='output/picsPoint_wd'

'reinit'

*'quit'
'sdfopen 'infile


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
  
  'set vpage 0 8.5 5.5 11'
  'set gxout grfill'
  'set clevs .01 .02 .05 .1 .2 .5 1 2 5 10 20'
  'set grads off'
  'd cnc_'sp'*1e9'
  'cbar'
  'draw title cnc_'sp',ug/m3 'time':00, 'date

  'set vpage 0 8.5 0 5.5'
  'set gxout grfill'
  'set clevs .1 .2 .5 1 2 5 10 20 50 100 200'
  'set grads off'
  'd wd_'sp'*1e9*3600'
  'cbar'
  'draw title wd_'sp' ug/hr/m2 'time':00, 'date
  'set clevs 0.01 0.02 0.05 .1 .2 .5 1 2 '
  'set gxout contour'
  'set grads off'
  'd prec_rate*3600'

   pic=outDir'/'sp'_'math_format("%03g",t)'.png'
  'printim 'pic' white x600 y800'
  say pic
  'c'
  t = t + 1
*  break
endwhile
*  '!xli 'pic
  'set vpage 0 8.5 5.5 11'
  'set gxout grfill'
  'set clevs .01 .02 .05 .1 .2 .5 1 2 5 10 20'
  'set grads off'
  'd sum(cnc_'sp', t=1, t='nT'))*1e9'
  'cbar'
  'draw title cnc_'sp', ug*hr/m3 'time':00, 'date

  'set vpage 0 8.5 0 5.5'
  'set gxout grfill'
  'set clevs .1 .2 .5 1 2 5 10 20 50 100 200'
  'set grads off'
  'd sum(wd_'sp', t=1, t='nT'))*3600*1e9'
  'cbar'
  'draw title wd_'sp', ug/m2 'time':00, 'date

   pic=outDir'/totwd_'sp'_'math_format("%03g",t)'.png'
  'printim 'pic' white x600 y800'
  say pic
  'c'
'quit'


