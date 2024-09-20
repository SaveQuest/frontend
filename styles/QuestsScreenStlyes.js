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
    borderRadius: 17.196,
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
    borderWidth: 2,
    borderColor: "#EFEFEF",
    borderRadius: 10,
    padding: 16,
    height:"auto",
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
    marginTop: 10,
    marginBottom: 10,
  },


  titleDate: {
    fontSize: 17,
    color: "#4D5764",
    fontWeight: "600",
    fontFamily: "../assets/fonts/Pretendard-Thin.otf",
  },


  titleTitle: {
    color: "#1E1E1E",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  my: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
    gap: 12,
  },
  one: {
    color: "#575757",
    fontSize: 18,
  },
  two: {
    color: "#23282F",
    fontSize: 22,
    fontWeight: "600",
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
    fontSize: 15,
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