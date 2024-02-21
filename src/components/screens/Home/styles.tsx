import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { styled } from 'styled-components/native';

const StyledHomepage = styled(View)`
  flex: 1;
`;

const StyledScrollView = styled(ScrollView)`
  background-color: ${({ theme }): string => theme.colors.greyLightBackground}px;
  padding-top: ${({ theme }): string => theme.layout.spacing_16Medium}px;
`;

const StyledHomePageLayout = styled(View)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): string => theme.layout.spacing_24Large}px;
  padding-bottom: ${({ theme }): string => theme.layout.spacing_24Large}px;
`;

export { StyledScrollView, StyledHomePageLayout, StyledHomepage };
