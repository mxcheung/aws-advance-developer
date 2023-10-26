# Advanced Developing on AWS - Lab 2 - Use AWS Lambda to develop microservicesThis lab will demonstrate how to use AWS Lambda in develping Microservices by experimenting with a function to resize images and delete non-image files.




# Task 1: Create S3 Buckets

```
aws s3 mb s3://microservice-sourcecode-mh-75135 --profile aws-lab-env

aws s3 mb s3://microservice-imagemanager-mh-75135 --profile aws-lab-env

C:\Users\Administrator>aws s3 mb s3://microservice-sourcecode-mh-75135 --profile aws-lab-env
make_bucket: microservice-sourcecode-mh-75135

C:\Users\Administrator>aws s3 mb s3://microservice-imagemanager-mh-75135 --profile aws-lab-env
make_bucket: microservice-imagemanager-mh-75135
```

# Task 2: Create the Lambda function locally


C:\Users\ADMINI~1\AppData\Local\Temp\2\TestLambda-lambda8333267790209518094.zip</span>


aws lambda update-function-code --function-name TestLambda --zip-file <"fileb://zipfile-path"> --profile aws-lab-env


# Task 3: Upload and test Lmbda function on Lambda

C:\Users\ADMINI~1\AppData\Local\Temp\2\TestLambda-lambda4032691979088132692.zip

```
aws lambda update-function-code --function-name TestLambda --zip-file <"fileb://zipfile-path"> --profile aws-lab-env


aws lambda update-function-code --function-name TestLambda --zip-file "fileb://C:\Users\ADMINI~1\AppData\Local\Temp\2\TestLambda-lambda4032691979088132692.zip" --profile aws-lab-env

```

```
C:\Users\ADMINI~1\AppData\Local\Temp\2>aws lambda update-function-code --function-name TestLambda --zip-file "fileb://C:\Users\ADMINI~1\AppData\Local\Temp\2\TestLambda-lambda4032691979088132692.zip" --profile aws-lab-env
{
    "FunctionName": "TestLambda",
    "FunctionArn": "arn:aws:lambda:eu-west-1:228444854755:function:TestLambda",
    "Runtime": "java8",
    "Role": "arn:aws:iam::228444854755:role/LambdaRole",
    "Handler": "microservices.lambda.s3handler.LambdaFunctionHandler",
    "CodeSize": 8430991,
    "Description": "",
    "Timeout": 15,
    "MemorySize": 512,
    "LastModified": "2023-10-26T01:01:10.000+0000",
    "CodeSha256": "Y6mSZCZYmXX0v2g31bDUahURHPt60XMltbJ4vqOD5J8=",
    "Version": "$LATEST",
    "TracingConfig": {
        "Mode": "PassThrough"
    },
    "RevisionId": "eb4ee79a-67e0-4090-9208-5338f4a7bd19",
    "State": "Active",
    "LastUpdateStatus": "InProgress",
    "LastUpdateStatusReason": "The function is being created.",
    "LastUpdateStatusReasonCode": "Creating",
    "PackageType": "Zip",
    "Architectures": [
        "x86_64"
    ],
    "EphemeralStorage": {
        "Size": 512
    },
    "SnapStart": {
        "ApplyOn": "None",
        "OptimizationStatus": "Off"
    },
    "RuntimeVersionConfig": {
        "RuntimeVersionArn": "arn:aws:lambda:eu-west-1::runtime:29ea702b84445e914f574272c047db3fdd9bf1da40d42feb641a2fc0a733ba01"
    }
}

```

# Task 5: Deploy the ImageManager Lambda function using an automation packge

cd C:\temp\workdir\eclipse-workspace\TestLambda



mvn package shade:shade -DskipTests=true



aws cloudformation package --template-file template.yaml --s3-bucket microservice-sourcecode-mh-75135 --output-template deploy-template.yaml --profile aws-lab-env


```
C:\temp\workdir\eclipse-workspace\TestLambda>aws cloudformation package --template-file template.yaml --s3-bucket microservice-sourcecode-mh-75135 --output-template deploy-template.yaml --profile aws-lab-env
Uploading to ab9c64c9287c7bf94eb8e19afad9804d  9581689 / 9581689.0  (100.00%)
Successfully packaged artifacts and wrote output template to file deploy-template.yaml.
Execute the following command to deploy the packaged template
aws cloudformation deploy --template-file C:\temp\workdir\eclipse-workspace\TestLambda\deploy-template.yaml --stack-name <YOUR STACK NAME>




aws lambda add-permission --function-name ImageManagerDemo-TestLambda-7tlvUdGSZ2vh --statement-id PolicyDocument --action "lambda:InvokeFunction" --principal s3.amazonaws.com --source-arn arn:aws:s3:::microservice-imagemanager-228444854755 --source-account 228444854755 --profile aws-lab-env


C:\temp\workdir\eclipse-workspace\TestLambda>aws lambda add-permission --function-name ImageManagerDemo-TestLambda-7tlvUdGSZ2vh --statement-id PolicyDocument --action "lambda:InvokeFunction" --principal s3.amazonaws.com --source-arn arn:aws:s3:::microservice-imagemanager-228444854755 --source-account 228444854755 --profile aws-lab-env
{
    "Statement": "{\"Sid\":\"PolicyDocument\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":\"s3.amazonaws.com\"},\"Action\":\"lambda:InvokeFunction\",\"Resource\":\"arn:aws:lambda:eu-west-1:228444854755:function:ImageManagerDemo-TestLambda-7tlvUdGSZ2vh\",\"Condition\":{\"StringEquals\":{\"AWS:SourceAccount\":\"228444854755\"},\"ArnLike\":{\"AWS:SourceArn\":\"arn:aws:s3:::microservice-imagemanager-228444854755\"}}}"
}
```


