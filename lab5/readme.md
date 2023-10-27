# Advanced Developing on AWS - Lab 5 - Developing microservices on AWSThis lab will bring together all that you have learned from the previous labs. You will re-design the monolithic CloudAir application and convert it to a serverless/serviceful application using microservices




# Task 1.1: Download source code and build the deployment artifact

```
C:\lab5
cd C:\lab5\TripSearchFull
set DDB_TABLENAME_TRIPSECTOR=CloudAirTripSectors

mvn clean test

```


# Task 4: Deploy the API and test


https://micbu5r7e5.execute-api.ap-southeast-2.amazonaws.com/prod/trips

{"succeeded":true,"message":"","errorCode":0,"data":[{"date":1717759139000,"originCity":"Canberra","destinationCity":"Singapore","airline":"Qantas"},{"date":1707254153000,"originCity":"Hobart","destinationCity":"Dallas","airline":"Qantas"},{"date":1698682143000,"originCity":"Newcastle","destinationCity":"LA","airline":"Qantas"},{"date":1712463136000,"originCity":"Sydney","destinationCity":"London","airline":"Qantas"},{"date":1706169153000,"originCity":"Darwin","destinationCity":"LA","airline":"Qantas"},{"date":1727801142000,"originCity":"Canberra","destinationCity":"Newcastle","airline":"Qantas"},{"date":1727496131000,"originCity":"Dubbo","destinationCity":"London","airline":"Qantas"},{"date":1699510141000,"originCity":"London","destinationCity":"Sydney","airline":"Qantas"},{"date":1729628154000,"originCity":"Melbourne","destinationCity":"Sydney","airline":"Qantas"},{"date":1729996151000,"originCity":"Cairo","destinationCity":"Sydney","airline":"Qantas"},{"date":1730383148000,"originCity":"Dallas","destinationCity":"Perth","airline":"Qantas"},{"date":1710405152000,"originCity":"Perth","destinationCity":"Canberra","airline":"Qantas"},{"date":1725802126000,"originCity":"Canberra","destinationCity":"Singapore","airline":"Qantas"},{"date":1723675147000,"originCity":"Dallas","destinationCity":"Singapore","airline":"Qantas"},{"date":1714705140000,"originCity":"Hobart","destinationCity":"Geelong","airline":"Qantas"},{"date":1709071135000,"originCity":"Sydney","destinationCity":"Singapore","airline":"Qantas"},{"date":1729954131000,"originCity":"Singapore","destinationCity":"Sydney","airline":"Qantas"},{"date":1713776144000,"originCity":"Melbourne","destinationCity":"London","airline":"Qantas"},{"date":1726719136000,"originCity":"Perth","destinationCity":"Sydney","airline":"Qantas"},{"date":1714498150000,"originCity":"Perth","destinationCity":"London","airline":"Qantas"},{"date":1719920152000,"originCity":"Newcastle","destinationCity":"Darwin","airline":"Qantas"},{"date":1718030132000,"originCity":"LA","destinationCity":"Dallas","airline":"Qantas"},{"date":1706065149000,"originCity":"LA","destinationCity":"London","airline":"Qantas"},{"date":1717894129000,"originCity":"Singapore","destinationCity":"Newcastle","airline":"Qantas"},{"date":1704678145000,"originCity":"Newcastle","destinationCity":"Canberra","airline":"Qantas"},{"date":1707708145000,"originCity":"Broome","destinationCity":"Dallas","airline":"Qantas"},{"date":1724823138000,"originCity":"Newcastle","destinationCity":"Singapore","airline":"Qantas"},{"date":1723503137000,"originCity":"London","destinationCity":"Brisbane","airline":"Qantas"},{"date":1700300125000,"originCity":"Perth","destinationCity":"Dallas","airline":"Qantas"},{"date":1718341142000,"originCity":"LA","destinationCity":"Perth","airline":"Qantas"},{"date":1718098140000,"originCity":"Sydney","destinationCity":"Geelong","airline":"Qantas"},{"date":1718901130000,"originCity":"Newcastle","destinationCity":"Singapore","airline":"Qantas"},{"date":1714211138000,"originCity":"Dubbo","destinationCity":"Dallas","airline":"Qantas"},{"date":1727550135000,"originCity":"Geelong","destinationCity":"Melbourne","airline":"Qantas"},{"date":1709177128000,"originCity":"Hobart","destinationCity":"Brisbane","airline":"Qantas"},{"date":1724316128000,"originCity":"London","destinationCity":"Newcastle","airline":"Qantas"},{"date":1707870129000,"originCity":"Sydney","destinationCity":"Dallas","airline":"Qantas"},{"date":1705102147000,"originCity":"Brisbane","destinationCity":"Dallas","airline":"Qantas"},{"date":1729947127000,"originCity":"London","destinationCity":"Geelong","airline":"Qantas"},{"date":1727041132000,"originCity":"LA","destinationCity":"Singapore","airline":"Qantas"},{"date":1729882137000,"originCity":"Singapore","destinationCity":"Geelong","airline":"Qantas"},{"date":1701197134000,"originCity":"Hobart","destinationCity":"Dallas","airline":"Qantas"},{"date":1726527155000,"originCity":"Sydney","destinationCity":"Melbourne","airline":"Qantas"},{"date":1724320144000,"originCity":"Dallas","destinationCity":"Melbourne","airline":"Qantas"},{"date":1704820151000,"originCity":"Canberra","destinationCity":"Sydney","airline":"Qantas"},{"date":1704301133000,"originCity":"LA","destinationCity":"Canberra","airline":"Qantas"},{"date":1706204149000,"originCity":"Perth","destinationCity":"Darwin","airline":"Qantas"},{"date":1719824146000,"originCity":"Melbourne","destinationCity":"Hobart","airline":"Qantas"},{"date":1722955148000,"originCity":"Singapore","destinationCity":"London","airline":"Qantas"},{"date":1701832154000,"originCity":"Dubbo","destinationCity":"Newcastle","airline":"Qantas"},{"date":1726866143000,"originCity":"Perth","destinationCity":"Singapore","airline":"Qantas"},{"date":1716543134000,"originCity":"Melbourne","destinationCity":"Geelong","airline":"Qantas"}]}





https://micbu5r7e5.execute-api.ap-southeast-2.amazonaws.com/prod/tripsfromcity/LA


{"succeeded":true,"message":"","errorCode":0,"data":[{"date":1727041132000,"originCity":"LA","destinationCity":"Singapore","airline":"Qantas"},{"date":1718030132000,"originCity":"LA","destinationCity":"Dallas","airline":"Qantas"},{"date":1704301133000,"originCity":"LA","destinationCity":"Canberra","airline":"Qantas"},{"date":1706065149000,"originCity":"LA","destinationCity":"London","airline":"Qantas"},{"date":1718341142000,"originCity":"LA","destinationCity":"Perth","airline":"Qantas"}]}


https://micbu5r7e5.execute-api.ap-southeast-2.amazonaws.com/prod/tripstocity/LA

{"succeeded":true,"message":"","errorCode":0,"data":[{"date":1706169153000,"originCity":"Darwin","destinationCity":"LA","airline":"Qantas"},{"date":1698682143000,"originCity":"Newcastle","destinationCity":"LA","airline":"Qantas"}]


# Task 5: Use CloudFormation/AWS Serverlist Application Model (AWS SAM) through the AWS CLI to deploy the HotelSearch microservice.


http://labstack-23d03e98-8142-4c90-ba2f-s3bucketwebsite-1epw4wjzfef5.s3-website-ap-southeast-2.amazonaws.com/#/

