import { useParams } from '@solidjs/router';

export default function () {
  const params = useParams();
  return <p>Welcome to {params.country}</p>;
}
