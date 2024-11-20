import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
        color: '#03375C',
    },
    section: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        color: '#03375C',
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555',
    },
    question: {
        fontWeight: '600',
        color: '#03375C',
    },
    button: {
        marginTop: 15,
        backgroundColor: '#03375C',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default styles;