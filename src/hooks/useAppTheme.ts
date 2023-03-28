import {DefaultTheme} from 'styled-components';
import {useAppDispatch} from '.';
import {setColor, setAppearance} from '../store/slices/theme';
import colors from '../theme/colors';

type Props = {
  changeTheme: (appearance: 'light' | 'dark' | 'auto') => void;
};

export default (): Props => {
  const dispatch = useAppDispatch();

  function changeTheme(appearance: 'light' | 'dark' | 'auto'): void {
    var theme: DefaultTheme = {
      colors: colors.lightColors,
    };

    if (appearance === 'dark') {
      theme = {
        colors: colors.darkColors,
      };
    }

    dispatch(setAppearance(appearance));
    dispatch(setColor(theme));
  }

  return {changeTheme};
};
