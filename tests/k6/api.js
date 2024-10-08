import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m30s', target: 10 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  const res = http.get('http://localhost:5000/api/usuarios');
  check(res, { 'status was 200': (r) => r.status == 200 });
  // sleep(1);
}