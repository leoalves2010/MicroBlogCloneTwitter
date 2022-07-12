import { useIndex } from '../../data/hooks/pages/useIndex.page';
import TextInput from '../components/inputs/TextInput/TextInput';

export default function Index(){
    useIndex();
    return(
        <TextInput />
    );
}