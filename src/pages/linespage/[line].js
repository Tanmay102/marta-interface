import { useRouter } from 'next/router';
import LinesPages from '../LinesPage';

export default function LinePage() {
  const router = useRouter();
  const { line } = router.query;

  if (line === undefined) {
    return <div>Loading...</div>;
  }
  return <LinesPages line={line} />;
}