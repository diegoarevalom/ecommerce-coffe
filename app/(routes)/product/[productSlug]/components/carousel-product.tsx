import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselProductProps {
  images: {
    id: number;
    formats: {
      thumbnail: {
        url: string;
      };
      medium?: {
        url: string;
      };
      small?: {
        url: string;
      };
      large?: {
        url: string;
      };
    };
  }[];
}


const CarouselProduct = (props: CarouselProductProps) => {
  const { images } = props
  console.log(images);
  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.map((images) => (
            <CarouselItem key={images.id}>
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.formats.thumbnail.url}`}
                alt='Image product'
                className="rounded-lg" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselProduct;