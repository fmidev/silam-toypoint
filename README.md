# Silam toypoint  test case

This is a simple point-source case for Silam model.
The case is made to complete within a few  seconds even at quite ancient computer.
ERA-Interim (ECMWF, https://www.ecmwf.int/en/forecasts/datasets/reanalysis-datasets/era-interim)
is used as a meteo driver for the case.

## Usage

1. If not yet done, get and compile compile SILAM (see
   https://github.com/fmidev/silam-model) to get thw model binary and
   supplementary data files.  Instructions below assume that
   "/path/to/silam-model" is the location of a working copy of the silam-model
   repo.

2. Clone the present directory to some other path:

  `$ git clone https://github.com/fmidev/silam-toypoint`

  `$ cd  silam-toypoint`

3. Make sure that `standard_setup_directory` parameter in the `toypoint_mpi.control` file points to 
/path/to/silam-model/ini directory. The path can be absolute, relative or a symlink.

Example for the symlink:

`$ ln -sfn /path/to/silam-model/ini ini`

3. Then feeding a .control file as a parameter to Silam should run the case. E.g. 

`$ /path/to/silam-model/bin/silam_v5_8pub toypoint_mpi.control`

should produce you a nice simulation of a puff dispersion.

4. The resulting .nc file can be visualised in some visualisation software, such as
GrADS, panoply, ncview etc... 

5. Feel free to modify source height, time, release duration etc.
Please refer to (a bit outdated) user guide  http://silam.fmi.fi/ -> Documents

6. Enjoy!


