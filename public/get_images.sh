# get all images in from 01 to 39 from this url: https://asterix.com/wp-content/uploads/2017/06/alb01nl.png and save them in the current directory
for i in {10..40}; do
    wget https://asterix.com/wp-content/uploads/2017/06/alb$i"nl.png" --no-check-certificate
done