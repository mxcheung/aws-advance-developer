var config = {

	"Region" : "us-west-1",

	"Cognito" : {
		"IdentityPoolId": "us-west-1:b425e855-a141-4a0f-b3bc-eff1486ea675"
	},

	"SQS" : {
		"Standard" : {
			"QueueUrl" : "https://sqs.us-west-1.amazonaws.com/047342758951/microservices_drawqueue_1"
		},
		"Secondary" : {
			"QueueUrl" : "https://sqs.us-west-1.amazonaws.com/047342758951/microservices_drawqueue_2"
		},
		"Tertiary" : {
			"QueueUrl" : "https://sqs.us-west-1.amazonaws.com/047342758951/microservices_drawqueue_3"
		},
		"FIFO" : {
			"QueueUrl" : "https://sqs.us-west-1.amazonaws.com/047342758951/microservices_drawqueue.fifo",
			"GroupId" : "microservices_sqs_fifo"
		}
	},

	"SNS" : {
		"TopicARN" : "arn:aws:sns:us-west-1:047342758951:microservicesMessageDuplicator"
	},

	"Kinesis" : {
		"StreamName" 		: "microservicesDrawingData",
		"PartitionKey"	: "Partition1"
	},

	"IoT" : {
		"Endpoint" : "a1xlf3u2mez7pz-ats.iot.us-west-1.amazonaws.com",
		"Topic" : "microservices/drawingdemo"
	}
}
