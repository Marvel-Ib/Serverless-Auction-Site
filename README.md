# Serverless-Auction-Site  Microservices Focused 
A serverless auction site where you post your products people can bid on it and the highest bidders takes all

Had my first taste of microservices 
I abstracted the Notification and Authorization from the main Auction Services


It utilizes AWS API GATEWAY ---- AWS Eventbridge --- AWS Dynamodb ---- AWS s3 auctions bucket ------ AWS sQS and SNS

Three main services ( Microservice) 

....key points   .....  (advantage of my project
. I greatly reduce dependnecy between the services scaling each services independently of other services 
