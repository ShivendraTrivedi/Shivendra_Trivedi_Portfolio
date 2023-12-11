import {Html} from '@react-three/drei'

{/*We have imported drei because we are rendering a 2d element which is loader 
spinner in a canvas which is 3d so we have to wrap it in html tag */}

const Loader = () => {
  return (
    <Html>
        <div className='flex items-center justify-center'>
            <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 animate-spin'/>
        </div>
    </Html>
  )
}

export default Loader