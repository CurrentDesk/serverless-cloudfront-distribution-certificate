import { ACM, Config, Route53, TemporaryCredentials } from "aws-sdk";

export interface ServerlessInstance {
  service: {
    service: string;
    provider: {
      stage: string;
      stackName: string;
      compiledCloudFormationTemplate: {
        Resources: any;
      };
      apiGateway: {
        restApiId: string;
      };
    };
    custom: {
      cfdDomain: {
        domainName: string;
        domainNames: string[];
        cloudFront: string;
        route53Role: string;
      };
    };
  };
  providers: {
    aws: {
      sdk: {
        Route53: typeof Route53;
        CloudFormation: any;
        ACM: typeof ACM;
        TemporaryCredentials: typeof TemporaryCredentials;
        Config: typeof Config;
      };
      getCredentials();
      getRegion();
    };
  };
  cli: {
    log(str: string);
    consoleLog(str: any);
  };
}
