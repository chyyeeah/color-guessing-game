let isProd = false;

const AWS_URL = 'ec2-54-177-108-130.us-west-1.compute.amazonaws.com/';
const URL = isProd ? AWS_URL : 'localhost:3001';

export default URL;