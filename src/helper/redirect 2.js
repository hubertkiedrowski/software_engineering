import { useHistory } from 'react-router-dom';

const handleRedirect = (path) => {
  const history = useHistory();
  history.push(path);
};

export default handleRedirect;
