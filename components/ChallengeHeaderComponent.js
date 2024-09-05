import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ChallengeHeaderComponent = () => {
  const data = {
    labels: ['9/05', '9/08', '9/11', '9/14', '9/17'],
    datasets: [
      {
        data: [4000, 2000, 9000, 3000, 1000],
        strokeWidth: 2,
        color: () => '#4fb081',
      },
    ],
  };

  return (
    <ScrollView>
      <Text style={styles.title}>SaveQuest</Text>
      
      <View style={styles.container}>
        <Text style={styles.subTitle}>6월 15일 토요일까지</Text>
        <Text style={styles.challengeTitle}>한달동안 평균 소비 금액 줄이기</Text>

        <View style={styles.grayLine} />

        <Text style={styles.statsHeader}>통계</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBoxWithBorder}>  
            <Text style={styles.statTitle}>나의 한달 평균 소비 금액</Text>
            <Text style={styles.statAmount}>₩54,000</Text>
            <Text style={styles.statTitle}>지금까지 줄인 소비 금액</Text>
            <Text style={styles.statAmount}>₩3,000</Text>
          </View>
        </View>

        <Text style={styles.chartTitle}>소비 통계</Text>

        <ScrollView horizontal={true}>
          <View style={styles.chartContainer}> 
            <LineChart
              data={data}
              width={screenWidth * 1.2}
              height={180}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: () => '#48a176',
                labelColor: () => 'black',
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#4fb081',
                  fill: '#ffffff',
                },
              }}
              bezier
              style={{
                borderRadius: 16,
              }}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderWidth: 2, 
    borderColor: '#e4e4e4',
    borderRadius: 16,
  },
  
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginLeft: 16,
    marginTop: 25,
    marginBottom: 1,
  },
  
  subTitle: {
    fontSize: 16,
    textAlign: 'left',
    color: '#888',
    marginBottom: 5,
  },

  challengeTitle: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    marginVertical: 1,
    marginBottom: 6,
  },

  grayLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    marginBottom: 10,
  },
  
  statsHeader: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 12,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  statBoxWithBorder: {
    flex: 1,
    padding: 10,
    paddingBottom: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    alignSelf: 'flex-start',
    borderWidth: 1.5,
    borderColor: '#e4e4e4',
  },

  statTitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'left',
    marginBottom: 6,
  },

  statAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 15,
  },

  chartTitle: {
    fontSize: 16,
    marginBottom: 10,
  },

  chartContainer: {
    borderWidth: 1.5,
    borderColor: '#e4e4e4',
    borderRadius: 16,
    overflow: 'hidden',
  },
});

export default ChallengeHeaderComponent;
