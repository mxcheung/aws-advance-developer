# Advanced Developing on AWS - Lab 4 - Exploring the AWS messaging optionsThis lab will demonstrate how to use the available AWS messaging services in developing Microservices, and experiment using the AWS SDKs (Java).

# Task 1 - Setting tup the lab environment

```
aws s3 mb s3://microservices-lab4-mc-01890 --region us-west-1 --profile aws-lab-env
aws s3api put-public-access-block --bucket microservices-lab4-mc-01890 --public-access-block-configuration "BlockPublicPolicy=false,RestrictPublicBuckets=false"
```



# Task 2 - SQS publisher to SQS subscriber


# Task 3 - SQS publisher to  multiple SQS subscribers

# Task 4 - SQS publisher to SQS subscriber with FIFO message ordering

# Task 5 - SNS publisher to multiple SQS subscribers



# Task 6 - Kinesis publisher to SQS subscriber
