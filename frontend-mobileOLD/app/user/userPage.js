import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNav from '../../components/bottomNav';
import { useLocalSearchParams } from 'expo-router';

const ProfileScreen = () => {

	const router = require('expo-router').useRouter();

	return (
		<View style={styles.container}>
			{/* Header section */}
					<View style={styles.header}>
						<Image
							source={{uri: 'https://via.placeholder.com/150'}} // Placeholder for profile image
							style={styles.profileImage}
						/>
						<Text style={styles.username}>Yasmin</Text>
					</View>

			{/* Options Section */}
			<View style={styles.optionsContainer}>
				<TouchableOpacity style={styles.optionButton}>
					<Icon name="event" size={24} color="#fff" />
					<Text style={styles.optionText}>Reservas feitas</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.optionButton}>
					<Icon name="logout" size={24} color="#fff" />
					<Text style={styles.optionText}>Sair da conta</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.optionButton} onPress={() => router.push('/user/menuUser')}>
					<Icon name="edit" size={24} color="#fff" />
					<Text style={styles.optionText}>Editar perfil</Text>
				</TouchableOpacity>
			</View>
			<BottomNav />
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#0F1C2B', // Dark background color
	paddingTop: 20,
	paddingHorizontal: 20,
  },
	header: {
		alignItems: 'center',
		marginBottom: 20, // menos espaço abaixo do header
		marginTop: 80,    // sobe o header
	},
	// backButton removido
	profileImage: {
		width: 166,
		height: 166,
		borderRadius: 83,
		backgroundColor: '#ccc',
		marginBottom: 25,
	},
  username: {
	fontSize: 31,
	color: '#fff',
	fontWeight: 'bold',
  },
	optionsContainer: {
		alignItems: 'center', // centraliza os botões
		marginTop: 0,        // sobe os botões
		marginBottom: 30,
		width: '100%',       // ocupa toda largura disponível
	},
	optionButton: {
		height: 60,           // diminui altura dos botões
		width: 329,           // largura menor e centralizada
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'left', // centraliza conteúdo
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginBottom: 20,    
		borderRadius: 25,
		backgroundColor: '#1F2C3C',
	},
  optionText: {
	fontSize: 15,
	color: '#fff',
	marginLeft: 10,
  },
});

export default ProfileScreen;