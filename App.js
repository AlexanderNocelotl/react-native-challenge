import { Text, View, Image} from 'react-native';
import Duck from './assets/images/duckpfp.jpeg';
import styles from './assets/styles/styles';

export default function App() {
  return (
    <View style={{backgroundColor: '#D6B4FC', display: 'flex', flex: 1}}>
      <View style={styles.imageContainer}>
      <Image style={styles.image}source={Duck} />
      </View>

      <View>
        <Text style={styles.text}> 
        I don't have a specific name to what my passion is, but I know I love creating things and innovating. I can say that I'm against tasks that are repetitive or a routine that is the same everyday, which helped me learn what my passion is. I get excited when I can use my ideas to make or change something. Knowing this, that's why I want to be part of the tech world. Technology is all about creating new things and that is what I want to do.
        </Text>

        <Text style={styles.text}> MY ROLE: PRODUCT MANAGER</Text>

<Text style={styles.text}> My dream job is to work at a high tech company like riot games. Hearing one of the staff's stories about wanting to help people through games really made me think games are so innovative. Because of this I believe video games companies have so many tasks to do and I can probably find a role in it that allows me to create in some way that is fun. I don't necessarily want to code out games but instead find another medium that helps develop the game like game art or ui/ux design.</Text>
         </View>

        
    </View>

    
  );
}



