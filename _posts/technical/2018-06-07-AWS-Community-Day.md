---
layout: post
category: technical
tags: [talk,aws,]
title: My first technical talk in Chicago!
---

It's AWS Community Day in Chicago@Morningstar HQ and also my first technical talk in the US.

<img class="center-block img-responsive" src="https://user-images.githubusercontent.com/1860126/42112046-2d3682bc-7bac-11e8-9e7d-b00a037e5481.jpg" width="60%" alt="aws-community-day-18">

It's about `Chaos Engineering` tool purely in serverless fashion, the link to slide is [here](https://www.slideshare.net/awschicago/chaos-monkey-by-serverless-ekalak-rengwanidchakul-chicago)

<!-- read more -->

Idea is I have RoboChaos machines to help me automate the chaos scenario!

From Simian Army to Lambda serverless 

This is an attempt to port [SimianArmy](https://github.com/Netflix/SimianArmy) to serverless model with AWS Lambda inspired from [Chaos Lambda](https://github.com/bbc/chaos-lambda)

I modified some of the code and use Terraform to script out all related infrastructure.

## How to setup

<img class="center-block img-responsive" src="https://raw.githubusercontent.com/anonymint/Robo-Chaos/master/asset/ChaosMaster%20Target.png" width="99%" alt="overview">

### Overview

First you need to setup `Master` account where most of codes located, you can follow sample script under `/sample` to get start or just goto `/infra` to run the terraform script.

Once you have master account, it's time to create `Target` accounts, with one Master account it can work with multiple target accounts and it can be the same for simple case like in `/sample` project.

Lastly, depend on your current scenario, if you're already have ASG setup with EC2 and SSM policy `arn:aws:iam::aws:policy/service-role/AmazonEC2RoleforSSM` attached to EC2 profile. Again in the `/sample` has been prepared for Master and Target account to be the same plus sample nginx application behind ELB with 2 T2micro instances.     

Code Structure
<pre class="prettyprint">
├── infra # this is for Master Account
│   ├── config
│   │   └── master.tfvar
│   ├── main.tf
│   ├── outputs.tf
│   └── variables.tf
├── infra_target # this is for Target Account
│   ├── main.tf
│   └── variables.tf
├── sample # sample app to get you start
│   ├── README.md
│   ├── apps
│   │   └── main.tf
│   ├── run.sh
│   └── teardown.sh
└── src
    └── *.py
</pre>

Have Fun!

