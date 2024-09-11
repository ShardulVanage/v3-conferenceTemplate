import { Button } from '@material-tailwind/react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from './ui/dialog';
import { PlusIcon } from 'lucide-react';

const data = [
  {
    id: 1,
    title: ' 2023 Recap',
    subtitle: 'Digital Marketing',
    description: 'Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ytlink: 'https://youtube.com/embed/-ryZWvIvSrI?autoplay=0',
  },
  
    {
    id: 3,
    title: 'Network',
    subtitle: 'Edouard Wilfrid Buquet',
    description: 'Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ytlink: 'https://youtube.com/embed/-ryZWvIvSrI?autoplay=0',
  },
    {
    id: 4,
    title: 'Party',
    subtitle: 'Edouard Wilfrid Buquet',
    description: 'Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.',
    image: 'https://images.unsplash.com/photo-1486591978090-58e619d37fe7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ytlink: 'https://youtube.com/embed/-ryZWvIvSrI?autoplay=0',
  },
  {
    id: 5,
    title: 'Explore',
    subtitle: 'Edouard Wilfrid Buquet',
    description: 'Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.',
    image: 'https://images.unsplash.com/photo-1518276171089-5d234e24effa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ytlink: 'https://youtube.com/embed/-ryZWvIvSrI?autoplay=0',
  },
  {
    id: 6,
    title: 'Reviews',
    subtitle: 'Edouard Wilfrid Buquet',
    description: 'Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.',
    image: 'https://images.unsplash.com/photo-1498192467103-290f567eb3a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ytlink: 'https://youtube.com/embed/-ryZWvIvSrI?autoplay=0',
  },
]
export function VideFeedBck() {
  return (

    <div className='flex sm:flex-row flex-col items-center justify-center gap-7 sm:gap-16 p-4 py-8  rounded-2xl  bg-white/10   ' >
{data.map((item, index) => (


    <Dialog
    key={index.id}
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
    
    }}

    >
       <div className='flex flex-col items-center justify-center'>

      
      <DialogTrigger
        style={{
          borderRadius: '9999px',
        }}
        className='flex  flex-col overflow-hidden border border-zinc-950/10  drop-shadow-md  dark:border-zinc-50/10 dark:bg-zinc-900 '
      >
        <DialogImage
          src={item.image}
          alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
          className='sm:h-32 sm:w-32  h-24 w-24 object-cover '
        />

      </DialogTrigger>
      <h1 className='mt-2 text-lg font-bold'>{item.title}</h1>
       </div>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: '24px',
          }}
          className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
        >
           <iframe  className='sm:h-[500px] w-auto h-[300px]'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={item.ytlink}>
      
        </iframe>
            
          {/* <DialogImage
            src='https://images.unsplash.com/photo-1486591978090-58e619d37fe7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
            className='h-full w-full'
          /> */}
          <div className='p-6'>
            <DialogTitle className='text-2xl text-zinc-950 font-bold'>
              {item.title}
            </DialogTitle>
            <DialogSubtitle className='text-zinc-700 font-medium '>
              {item.subtitle}
            </DialogSubtitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                {item.description}
            
              </p>
              <a >
               <Button className=' mt-8' variant="outlined">Watch more</Button>
               </a>
            </DialogDescription>
          </div>
          <DialogClose className='text-zinc-50' />
        </DialogContent>
      </DialogContainer>
    </Dialog>

))}
    </div>
  );
}
