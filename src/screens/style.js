import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: '#DCB989', //ddb784
    flex: 1,
  },
  logoImg: {
    width: 117,
    height: 108,
  },
  topScrollContainer: {
    width: 137,
    height: 34,
    backgroundColor: '#EAC99E',
    borderRadius: 16,
    borderColor: '#531900',
    borderWidth: 0.5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 8,
  },
  topScrollImg: {
    width: 24,
    height: 24,
    marginRight: 10,
    borderRadius: 30,
  },
  card: {
    borderRadius: 16,
    borderColor: '#C98528',
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    overflow: 'hidden',
    marginTop: 10,
    backgroundColor: '#FAC378',
    paddingBottom: 34,
  },
  cardImg: {
    width: '100%',
    height: 424,
    overflow: 'hidden',
  },
  topFrame: {
    width: '100%',
    height: 24,
    position: 'absolute',
    top: -1,
    right: -20,
    overflow: 'hidden',
  },
  bottomShadow: {
    width: '100%',
    height: 67,
    position: 'absolute',
    bottom: -10,
    overflow: 'hidden',
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 37,
    paddingHorizontal: 21,
    alignItems: 'center',
  },
  bottomLImg: {
    width: 113,
    height: 65,
    marginRight: 17,
  },
});

export default styles;
