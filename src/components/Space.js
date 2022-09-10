import { Text } from 'react-native';

export default function Space({ lines = 5 }) {

    const dummyArray = (new Array(lines)).fill(0);

    return (
        <>
            {dummyArray.map((_, idx) => (<Text key={idx}></Text>))}
        </>
    );
}