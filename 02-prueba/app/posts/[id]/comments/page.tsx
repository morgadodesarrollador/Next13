import { IComment } from '../../interfaces/IPosts';
import ListOfComments from './components/ListOfComments';


interface Props {
    params: {
        id: string
    }
}
const CommentsPage = async ({params}: Props) => {
   const  { id } = params;
   await new Promise (resolve => setTimeout(resolve, 2000));
   return <ListOfComments key={id} id={ id }   />
}

export default CommentsPage