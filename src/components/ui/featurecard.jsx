import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function FeatureCard({ category, title, description }) {
  return (
    
       <Card className="w-auto max-w-[24rem]">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          {category}
        </Typography>
        <Typography
          color="blue-gray"
          className="mt-1 mb-2 text-[20px] font-bold"
        >
          {title}
        </Typography>
      </CardHeader>
      <CardBody className="px-4 pt-0">
        <Typography className="font-normal text-gray-600">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 px-4">
        <Button>read more</Button>
      </CardFooter>
    </Card>
     
       
  );
}

export default FeatureCard;