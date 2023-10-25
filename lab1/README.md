# Lab 1 - Deploy your mononith application using AWS Elastic Beanstalk

```
mysql -u root --password=labpassword -h RDSInstanceAddress
```

```
AWSLabsUser-h2SosxfRuagagBRpDcGLJs:~/environment $ mysql -u root --password=labpassword -h labstack-23d03e98-8142-4c90-ba2f-725-labdbinstance-ljzfsqd8gyjm.xxxxxxxxxxxx.us-west-1.rds.amazonaws.com
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 41
Server version: 8.0.33 Source distribution

Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> 
```


```
aws configure set profile.aws-lab-env.region us-west-1
```

# UPLOAD CLOUDAIR WAR FILE TO AN AMAZON SIMPLE STORAGE SERVICE (AMAZON S3)
```
aws s3 mb s3://monolith-app-<YOUR-INITIALS>-<YOUR-ZIP> --profile aws-lab-env
aws s3 mb s3://monolith-app-xxx-6789 --profile aws-lab-env
```
