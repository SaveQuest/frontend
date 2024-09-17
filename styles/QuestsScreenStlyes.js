import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 6,
    marginTop:14,
    paddingHorizontal: 5,
  },
  scrollView: {
    flexGrow: 1,
    padding: 15,
  },

  challenge: {
    backgroundColor: "#FFF",
    borderRadius: 17.196,
    overflow: "hidden",
    marginBottom: 10,
  },
  header: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "flex-start", 
    backgroundColor: "green",
    paddingLeft: 16,  
  },
  headerContainer: {
    paddingHorizontal: 15,  
    backgroundColor: '#f3f5f6',  
  },
  content: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 12,
  },
  challengeHead: {
    color: "#FFF",
    fontSize: 16,
    opacity: 0.79,
  },
  challengeContext: {
    color: "#FFF",
    fontSize: 23,
    fontWeight: "bold",
  },

  title: {
    borderBottomWidth: 2.5,
    borderBottomColor: "#D9D9D9",
    marginTop: 10,
    marginBottom: 10,
  },
  titleDate: {
    fontSize: 14,
    color: "#818181",
  },
  titleTitle: {
    color: "#1E1E1E",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },

  my: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  left: {
    flex: 1,
    gap: 12,
  },
  one: {
    color: "#575757",
    fontSize: 14,
  },
  two: {
    color: "#000",
    fontSize: 26,
    fontWeight: "bold",
  },

  right: {
    flex: 1,
  },
  myGame: {
    gap: 4,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 0,
    margin: 0,
  },
  level: {
    fontSize: 16,
    color: '#81C966',
  },
  levelLog: {
    fontSize: 13,
    fontWeight: '400',
    color: '#55555E',
    fontWeight: 'bold',
  },
  gameName: {
    fontSize: 15,
    color: '#389348',
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#81C966',
    padding: 5,
    width: 100,
    alignItems: 'center',
    borderRadius: 8,
  },
  myRank: {
    color: 'white',
    fontWeight: "bold",
  },

  rank: {
    marginTop: 30,
    paddingHorizontal: 8,   
  },
  rankTab: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rankTabText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginTop: 20,
    marginBottom: 10,
  },
});

export default styles;