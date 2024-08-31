import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  amountUsedToday: {
    color: '#55555E',
    textAlign: 'left',
    fontFamily: 'Pretendard-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18,
    marginBottom: 5,
  },
  amountComparison: {
    color: '#666',
    fontFamily: 'Pretendard-Medium',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
  },
  bold: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
    fontFamily: 'Pretendard-Bold',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 17,
    padding: 20,
    marginBottom: 20,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  cardText: {
    flex: 1,
    marginBottom: 5,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#389348',
    lineHeight: 19,
  },
  headerContainer: {
    paddingTop:20,
    paddingHorizontal: 20,  // 좌우 패딩 추가하여 헤더가 화면 끝에 맞지 않도록 조정
    backgroundColor: '#f0f0f0',  // 배경색 맞춤
  },
  level: {
    fontSize: 13,
    fontFamily: 'Pretendard-Medium',
    fontWeight: '500',
    color: '#55555E',
    lineHeight: 19,
  },
  levelValue: {
    fontSize: 15,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#389348',
    lineHeight: 19,
  },
  progressBarBackground: {
    height: 9,
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    marginTop: 4,
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#389348',
    borderRadius: 10,
    width: '70%',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Pretendard-Medium',
    fontWeight: '500',
    color: '#55555E',
    marginTop: 13,
    lineHeight: 19,
  },
  value: {
    fontSize: 17,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#389348',
    lineHeight: 19,
  },
  characterImage: {
    width: 150,
    height: 150,
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  tasks: {
    flex: 1,
  },
  selectTaskButton: {  // 버튼 스타일 수정
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 17,
    backgroundColor: '#fff',
    marginTop: 20,
    width: '100%',  // 버튼의 가로 크기를 화면의 95%로 설정
  },
  selectTaskButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
});
