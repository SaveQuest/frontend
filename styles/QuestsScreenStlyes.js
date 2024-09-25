import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f5f6",
    paddingTop: 6,
    paddingHorizontal: 5,
  },
  scrollView: {
    flexGrow: 1,
    padding: 15,
  },

  challenge: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: "auto",
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
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f3f5f6',
  },
  content: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 12,
  },

  border: {
    borderWidth: 1,
    borderColor: "#EFEFEF",
    borderRadius: 10,
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
  },
  
  titleDate: {
    fontSize: 13,
    color: "#4D5764",
    fontWeight: "600",
    fontFamily: "WantedSans-Regular",
  },


  titleTitle: {
    color: "#1E1E1E",
    fontSize: 19,
    fontWeight: "bold",
    lineHeight: 30
  },

  my: {
    marginTop: 14,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
    gap: 12,
  },
  one: {
    color: "#575757",
    fontSize: 15,
    fontFamily: "WantedSans-Medium"
  },
  two: {
    color: "#23282F",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "WantedSans-SemiBold"
  },

  right: {
    flex: 1,
    marginTop: 40,
  },
  myGame: {
    display: "flex",
    flexDirection: "row",
    padding: 4,
    alignItems: "baseline",
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
    fontSize: 24,
    color: '#43B319',
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#43B319',
    padding: 5,
    width: 80,
    alignItems: 'center',
    borderRadius: 8,
  },
  myRank: {
    color: '#FFFFFF',
    fontWeight: "bold",
  },

  rank: {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 8,
    display: "flex",
    justifyContent: "space-between",

  },
  rankTab: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rankTabText: {
    fontWeight: "600",
    fontSize: 17,
  },
  seeRankMore: {
    fontWeight: "600",
    fontSize: 13,
  },
  rankBoxFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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