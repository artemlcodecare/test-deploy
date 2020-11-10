# Test deploy

616383082720.dkr.ecr.us-east-2.amazonaws.com/virtower

region = us-east-2
account_id =

aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 616383082720.dkr.ecr.us-east-2.amazonaws.com
