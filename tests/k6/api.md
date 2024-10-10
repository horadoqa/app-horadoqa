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

- 1.915 requests/seg com 4.1ms tempo de resposta

  ✓ status was 200

     checks.........................: 100.00% 287242 out of 287242
     data_received..................: 155 MB  1.0 MB/s
     data_sent......................: 26 MB   176 kB/s
     http_req_blocked...............: avg=4.27µs  min=1.4µs      med=3.8µs  max=4.3ms    p(90)=5.4µs    p(95)=6.1µs   
     http_req_connecting............: avg=5ns     min=0s         med=0s     max=307.52µs p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.1ms   min=249.27µs   med=4.08ms max=65.39ms  p(90)=5.6ms    p(95)=6.29ms  
       { expected_response:true }...: avg=4.1ms   min=249.27µs   med=4.08ms max=65.39ms  p(90)=5.6ms    p(95)=6.29ms  
     http_req_failed................: 0.00%   0 out of 287242
     http_req_receiving.............: avg=73.6µs  min=-2587882ns med=71.7µs max=8.06ms   p(90)=106.41µs p(95)=118.81µs
     http_req_sending...............: avg=13.48µs min=4.1µs      med=10.3µs max=4.52ms   p(90)=24.7µs   p(95)=35.7µs  
     http_req_tls_handshaking.......: avg=0s      min=0s         med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.01ms  min=197.57µs   med=4ms    max=65.35ms  p(90)=5.5ms    p(95)=6.18ms  
     http_reqs......................: 287242  1915.091159/s
     iteration_duration.............: avg=4.21ms  min=921.47µs   med=4.18ms max=65.48ms  p(90)=5.73ms   p(95)=6.42ms  
     iterations.....................: 287242  1915.091159/s
     vus............................: 1       min=1                max=10
     vus_max........................: 10      min=10               max=10