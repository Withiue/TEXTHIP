// import { Text, View, StyleSheet, Dimensions } from 'react-native';

// const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

// export default function Share() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Share screen</Text>
//     </View>
//   );
// }

// const MARGIN_RATIO = 0.0444;  // 16px / 360px
// const GRID_MARGIN = windowWidth * MARGIN_RATIO;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     padding: GRID_MARGIN,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: GRID_MARGIN,
//   },
//   headerText: {
//     fontSize: Math.max(16, windowWidth * 0.045),
//     fontWeight: '600',
//     color: '#000000',
//   },
//   imageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//   },
//   bottomButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: GRID_MARGIN,
//     paddingBottom: GRID_MARGIN,
//     backgroundColor: '#FFFFFF',
//   },
//   bottomButton: {
//     flex: 1,
//     marginHorizontal: GRID_MARGIN / 2,
//     paddingVertical: GRID_MARGIN,
//     borderRadius: 8,
//     backgroundColor: '#000000',
//   },
//   bottomButtonText: {
//     color: '#FFFFFF',
//     fontSize: Math.max(14, windowWidth * 0.04),
//     fontWeight: '500',
//     textAlign: 'center',
//   },
// //   '@media (prefers-color-scheme: dark)': {
// //     container: { backgroundColor: '#1A1A1A' },
// //     headerText: { color: '#FFFFFF' },
// //     bottomButtonsContainer: { backgroundColor: '#1A1A1A' },
// //     bottomButton: { backgroundColor: '#FFFFFF' },
// //     bottomButtonText: { color: '#000000' },
// //   },
// });