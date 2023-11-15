import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingRight: 17,
    paddingLeft:24,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 100,
  },
  messageNumberContainer: {
    width: 11,
    height: 10,
    backgroundColor: '#F35BAC',
    borderRadius: 11,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 7,
    top:8,
  },
  messageNumber: {
    fontSize: 6,
    fontFamily: 'Inter',
    lineHeight: 7,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  userStoryContainer: {
    paddingHorizontal: 26,
    marginTop: 12,
    height: 100,
  },
  userPostContainer: {
    marginTop:30,
    paddingHorizontal: 22,
  }
});

export default style;