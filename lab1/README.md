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
# Task 4.1 - Configure the databse environment variables to Run locally
```
Oct 25, 2023 2:38:21 AM org.apache.catalina.startup.Catalina start
INFO: Server startup in [11,409] milliseconds
IndexController called
Hibernate: select flightspec0_.id as id1_0_, flightspec0_.body as body2_0_, flightspec0_.cost as cost3_0_, flightspec0_.destination as destinat4_0_, flightspec0_.destinationCode as destinat5_0_, flightspec0_.expiryDate as expiryDa6_0_, flightspec0_.header as header7_0_, flightspec0_.origin as origin8_0_, flightspec0_.originCode as originCo9_0_ from flightspecial flightspec0_ where flightspec0_.expiryDate>1698201622400 order by flightspec0_.expiryDate
Hibernate: select hotelspeci0_.id as id1_1_, hotelspeci0_.cost as cost2_1_, hotelspeci0_.description as descript3_1_, hotelspeci0_.expiryDate as expiryDa4_1_, hotelspeci0_.hotel as hotel5_1_, hotelspeci0_.location as location6_1_ from hotelspecial hotelspeci0_ where hotelspeci0_.expiryDate>1698201622947 order by hotelspeci0_.expiryDate
ResponseQRCodeGenerator called
```


# UPLOAD CLOUDAIR WAR FILE TO AN AMAZON SIMPLE STORAGE SERVICE (AMAZON S3)
```
aws s3 mb s3://monolith-app-<YOUR-INITIALS>-<YOUR-ZIP> --profile aws-lab-env
aws s3 mb s3://monolith-app-xxx-6789 --profile aws-lab-env
```
