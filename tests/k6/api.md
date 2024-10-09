# API

## O teste de API com k6 sem cache

O endpoint http://localhost:5000/api/usuarios atendeu:

- 2.013 requests/seg com 3.9ms de tempo de resposta

    ✓ status was 200

     checks.........................: 100.00% 302073 out of 302073
     data_received..................: 132 MB  880 kB/s
     data_sent......................: 28 MB   185 kB/s
     http_req_blocked...............: avg=3.94µs  min=1.3µs      med=3.5µs  max=1.67ms  p(90)=5.1µs  p(95)=5.8µs  
     http_req_connecting............: avg=3ns     min=0s         med=0s     max=155.4µs p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.9ms   min=100.9µs    med=3.84ms max=45.72ms p(90)=5.9ms  p(95)=6.71ms 
       { expected_response:true }...: avg=3.9ms   min=100.9µs    med=3.84ms max=45.72ms p(90)=5.9ms  p(95)=6.71ms 
     http_req_failed................: 0.00%   0 out of 302073
     http_req_receiving.............: avg=70.06µs min=13.7µs     med=68.6µs max=5.41ms  p(90)=102µs  p(95)=113.9µs
     http_req_sending...............: avg=12.02µs min=-2578666ns med=9.4µs  max=2.15ms  p(90)=16.7µs p(95)=33.78µs
     http_req_tls_handshaking.......: avg=0s      min=0s         med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.82ms  min=0s         med=3.76ms max=45.59ms p(90)=5.81ms p(95)=6.62ms 
     http_reqs......................: 302073  2013.94557/s
     iteration_duration.............: avg=4ms     min=865.56µs   med=3.94ms max=45.89ms p(90)=6.01ms p(95)=6.84ms 
     iterations.....................: 302073  2013.94557/s
     vus............................: 1       min=1                max=10
     vus_max........................: 10      min=10               max=10

## O teste de API com k6 com cache

O endpoint http://localhost:5000/api/usuarios atendeu:

- X requests/seg com X tempo de resposta