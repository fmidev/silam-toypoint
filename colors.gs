function setcolor(args)
*
* Defines a large number of colours following
* the Carl Fortelius colour scheme plus
* sets several types of the rainbow colour chains
*

*light yellow to dark red
'set rgb 20 255 255 220'
'set rgb 21 255 250 170'
'set rgb 22 255 232 120'
'set rgb 23 255 192  60'
'set rgb 24 255 160   0'
'set rgb 25 255  96   0'
'set rgb 26 255  50   0'
'set rgb 27 225  20   0'
'set rgb 28 192   0   0'
'set rgb 29 165   0   0'
*
*light green to dark green
'set rgb 30 230 255 230'
'set rgb 31 210 250 210'
'set rgb 32 177 245 177'
'set rgb 33 143 235 143'
'set rgb 34 110 230 110'
'set rgb 35  80 220  80'
'set rgb 36  50 195  50'
'set rgb 37  30 175  30'
'set rgb 38  15 160  15'
'set rgb 39   1 120   1'
*
*light blue to dark blue
'set rgb 40 240 255 255'
'set rgb 41 215 250 255'
'set rgb 42 180 240 250'
'set rgb 43 150 210 250'
'set rgb 44 120 185 250'
'set rgb 45  80 165 245'
'set rgb 46  60 150 245'
'set rgb 47  40 130 240'
'set rgb 48  30 110 235'
'set rgb 49  20 100 210'
'set rgb 50   5  60 155'
*
*light purple to dark purple
'set rgb 51 220 220 255'
'set rgb 52 192 180 255'
'set rgb 53 160 140 255'
'set rgb 54 128 112 235'
'set rgb 55 112  96 220'   
'set rgb 56  72  60 200'   
'set rgb 57  60  40 180'
'set rgb 58  45  30 165'
'set rgb 59  40   0 160'
*
*light pink to dark rose  
'set rgb 61 255 230 230'
'set rgb 62 255 200 200'
'set rgb 63 248 160 160'
'set rgb 64 230 140 140'
'set rgb 65 230 112 112'
'set rgb 66 230  80  80'   
'set rgb 67 200  60  60'   
'set rgb 68 180  40  40'
'set rgb 69 164  32  32'

*light beige to dark brown   
'set rgb 70 250 240 230'
'set rgb 71 240 220 210'
'set rgb 72 225 190 180'
'set rgb 73 200 160 150'
'set rgb 74 180 140 130'   
'set rgb 75 160 120 110'  
'set rgb 76 140 100  90'
'set rgb 77 120  80  70'
'set rgb 78 100  60  50'
'set rgb 79 80   40  30'

*light white to dark black   
'set rgb 80 254 254 254'
'set rgb 81 230 230 230'
'set rgb 82 210 210 210'
'set rgb 83 190 190 190'
'set rgb 84 170 170 170'   
'set rgb 85 150 150 150'  
'set rgb 86 130 130 130'
'set rgb 87 110 110 110'
'set rgb 88  90  90  90'
'set rgb 89  70  70  70'
'set rgb 90  50  50  50'
'set rgb 91  10  10  10'
*

* CAMS forecast palete
'set rgb 100  156 199 235' 
'set rgb 101  0   158 235'
'set rgb 102  0   122 191'
'set rgb 103  38  92  161'
'set rgb 104  38  145 112'
'set rgb 105  107 179  92'
'set rgb 106  255 245 156'
'set rgb 107  245 209  56'
'set rgb 108  235 181  56'
'set rgb 109  222 135  63'
'set rgb 110  204  53  51'
'set rgb 111  156  23  35'


* A few pre-defined rainbow-like sequences

col_type = subwrd(args,1)
*
cols=FALSE

* CAMS forecast palete
if(col_type = "cams")
  cols = "100 101 102 103 104 105 106 107 108 109 110 111"
endif

if(col_type = "def")
  cols = "9 14 4 11 5 13 3 10 7 12 8 2 6"
endif

* Default rainbow with grey low-end
if(col_type = "def_lowgrey")
  cols = "88 85 83 45 36 10 7 12 8 2 6"
endif

if(col_type = "def_lowblue")
  cols = "49 47 45 37 35 10 7 12 8 2 6"
endif

if(col_type = "def_lowwhite")
  cols = "0 47 45 43 37 34 10 7 12 8 2 6"
endif
if(col_type = "def_lowwhitered")
  cols = "49 61 62 63 64 65 66 67 68 69"
endif

* Grey-scale sequence
if(col_type = "grey")
  cols = "91 90 89 88 87 86 85 84 83 82 81 80"
endif

* Blue halftone color sequence
if(col_type = "blue")
  cols = "50 49 48 47 46 45 44 43 42 41 1"
endif

* Grey-scale inverse sequence
if(col_type = "grey_inverse")
  cols = "80 81 82 83 84 85 86 87 88 89 90 91"
endif

* Blue halftone inverse sequence
if(col_type = "blue_inverse")
  cols = "0 41 42 43 44 45 46 47 48 49 50"
endif

* Brown halftone inverse color sequence
if(col_type = "brown_inverse")
  cols = "0 70 71 72 73 74 75 76 77 78 79"
endif

* Brown halftone inverse color sequence
if(col_type = "brown")
  cols = "79 78 77 76 75 74 73 72 71 70"
endif

* Green halftone inverse color sequence
if(col_type = "green_inverse")
  cols = "0 30 31 32 33 34 35 36 37 38 39"
endif

* Green halftone color sequence
if(col_type = "green")
  cols = "39 38 37 36 35 34 33 32 31 30 0"
endif

*_rainbow1 = "90 87 83 45 36 10 7 12 8 2 6"

* Two-side coloring blue-red
if(col_type = "two_side_blue_red")
  cols = "50 48 46 44 42 41 80 21 22 24 26 28 29"
endif

* Long multi-part
if(col_type = "long_blue_red")
*             blue           green          brown          red
  cols = "49 47 45 43 41 38 36 34 32 30 78 76 74 72 70 29 27 25 23 21"
endif


if ( cols = FALSE ) 
   say 'Unknown col_type: 'col_type
*   'quit'
else
   'set rbcols 'cols
endif
