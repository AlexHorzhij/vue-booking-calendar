set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:AlexHorzhij/vue-booking-calendar.git main:gh-pages