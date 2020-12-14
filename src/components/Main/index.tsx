import * as S from './styles';

const Main = ({ title = 'meu texto top' }) => (
    <S.Wrapper>
        <S.Title>{title}</S.Title>
    </S.Wrapper>
);

export default Main;
