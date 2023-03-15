# Silam toypoint  test case

This is a simple point-source case for Silam model.
The case is made to complete within a few  seconds even with a moderate-power
laptop.

##Case description

The case simulates an idealized release of three species:
passive non-depositing gas, coarse (6um) and giant (20um) aerosol. The release occurs 
during one hour in the layer 50-100m above the marine surface. The 
resulting plume is then transported and deposited during 18 hours. Both dry and wet deposition
of the aerosols in the plume are simulated. 

ERA-Interim (ECMWF, https://www.ecmwf.int/en/forecasts/datasets/reanalysis-datasets/era-interim)
is used as a meteo driver for the case.

## Running the case

1. If not yet done, get and compile compile SILAM (see
   https://github.com/fmidev/silam-model) to get the model binary and
   supplementary data files.  Instructions below assume that
   "/path/to/silam-model" is the location of a working copy of the silam-model
   repo.

2. Clone the silam-toypoint repository to your home directory or to some other location
   (not to silam-model directory).

  `$ git clone https://github.com/fmidev/silam-toypoint`

  `$ cd  silam-toypoint`

3. Make sure that `standard_setup_directory` parameter in the `toypoint_mpi.control` file points to 
  /path/to/silam-model/ini directory. The path can be absolute, relative or a symlink.
  To create a symlink use:

  `$ ln -sfn /path/to/silam-model/ini ini`

3. Then feeding a .control file as a parameter to Silam should run the case. E.g. 

  `$ /path/to/silam-model/bin/silam_v5_8pub toypoint_mpi.control`

  should produce you a nice simulation of a plume dispersion.

4. The resulting .nc file can be visualised with included grads scripts described below.
  The .nc files can be also expolred with some visualisation software, such as
  GrADS, panoply, ncview etc... 


##Plotting scripts

The scripts are designed to plot one species at a time. Each species 
can be plotted by commenting out other species in the beginning of each script.
The scripts plot all time steps from the Silam output file (`output/toypoint.nc`).

1. `plot-Point.gs` maps of near-surface concentrations

2. `plot-PointSlice.gs` vertically averaged concentration along latitude. The plots
are in x-z plane

3. `plot-Depo-dd.gs` Plots near-surface concentrations and *dry* deposition rates.
 Besides that total exposure and total dry deposition for the whole simulation time are plotted.

4. `plot-Depo-wd.gs` Plots near-surface concentrations and *wet* deposition rates.
 The deposition plot is overplayed with the contours of precipitation rates.
 Besides that total exposure and total wet deposition for the whole simulation time are plotted.

## Analyzing deposition

   Run the case to get the log file and the output .nc file

### Task 1: Wet deposition 
  1. Generate plots for all species with `plot-Depo-wd.gs`
  2. Compare the wet deposition rates and concentrations of different species
    in the beginning, middle and end of the simulation times
  3. Summarize the findings
  4. Compare total exposures and wet depositions of different species 
  5. Try to explain the differences


### Task 2: Dry deposition 
  1. Generate plots for all species with `plot-Depo-dd.gs`
  2. Compare the deposition rates and concentrations of different species
    in the beginning, middle and end of the simulation times
  3. Summarize the findings
  4. Compare total exposures and dry depositions of different species 
  5. Try to explain the differences
  
### Task 3: The effect of a source height on dry deposition
  1. Save the plots, emission source and the log file from Tasks 1 and 2 to a
   separate directory:
   
  `$  mkdir emis-50-100`

  `$  mv output picsPoint_dd picsPoint_wd emis-50-100`

  2. Change the emission height in the emission source file `src_point.v5` by
  replacing _bottom_ and _top_ fields in the `par_str_point =` lines from
  the current values `50. 100.` to e.g. `1500. 1700.` meters above the surface

  3. Run the modified case

  4. Plot and analyze the dry depositions as described in Task 2 (steps 1-5)

  5. Compare the corresponding plots from the original and the modified case
  
  6. Summarize the findings
  
  


  

   


