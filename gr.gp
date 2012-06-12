set key left
set xlabel "ngame"
set ylabel "npoint"
set macros
st='u ($0+1):($1-0.7*$0)'
plot "<./analysis.sh 1" @st w lp t "always choose 1", \
     "<./analysis.sh 2" @st w lp t "always choose 2", \
     "<./analysis.sh 3" @st w lp t "always choose 3", \
     "<./analysis.sh 4" @st w lp t "always choose 4", \
     "<./analysis.sh 5" @st w lp t "always choose 5"

call "saver.gp" "gr-turn"

st='u ($0+1):($1)'
plot "<./analysis.sh 1" @st w lp t "always choose 1", \
     "<./analysis.sh 2" @st w lp t "always choose 2", \
     "<./analysis.sh 3" @st w lp t "always choose 3", \
     "<./analysis.sh 4" @st w lp t "always choose 4", \
     "<./analysis.sh 5" @st w lp t "always choose 5"
call "saver.gp" "gr-direct"