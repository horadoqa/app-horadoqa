# CADASTRO

## O teste de CADASTRO com k6 sem cache

O endpoint http://localhost/ atendeu:

- 7.729 requests/seg com 933.48µs tempo de resposta

✓ status was 200

     checks.........................: 100.00% 1159387 out of 1159387
     data_received..................: 912 MB  6.1 MB/s
     data_sent......................: 87 MB   580 kB/s
     http_req_blocked...............: avg=4.61µs   min=1.2µs     med=3.3µs    max=3.36ms  p(90)=4.4µs   p(95)=5.4µs 
     http_req_connecting............: avg=185ns    min=0s        med=0s       max=3.22ms  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=933.48µs min=54.5µs    med=780.7µs  max=47.51ms p(90)=1.49ms  p(95)=1.87ms
       { expected_response:true }...: avg=933.48µs min=54.5µs    med=780.7µs  max=47.51ms p(90)=1.49ms  p(95)=1.87ms
     http_req_failed................: 0.00%   0 out of 1159387
     http_req_receiving.............: avg=80.29µs  min=-375759ns med=34.4µs   max=29.56ms p(90)=154.5µs p(95)=328µs 
     http_req_sending...............: avg=12.61µs  min=3.3µs     med=9.1µs    max=10.15ms p(90)=13.3µs  p(95)=26.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s        med=0s       max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=840.57µs min=0s        med=700.75µs max=44.32ms p(90)=1.35ms  p(95)=1.7ms 
     http_reqs......................: 1159387 7729.217368/s
     iteration_duration.............: avg=1.03ms   min=248.2µs   med=878.41µs max=47.82ms p(90)=1.61ms  p(95)=2.01ms
     iterations.....................: 1159387 7729.217368/s
     vus............................: 1       min=1                  max=10
     vus_max........................: 10      min=10                 max=10

## O teste de API com k6 com cache

O endpoint http://localhost/ atendeu:

- 6.775 requests/seg com 1.06ms tempo de resposta

  ✓ status was 200

     checks.........................: 100.00% 1016267 out of 1016267
     data_received..................: 800 MB  5.3 MB/s
     data_sent......................: 76 MB   508 kB/s
     http_req_blocked...............: avg=5.17µs   min=1.2µs      med=3.6µs    max=8.77ms  p(90)=5.1µs    p(95)=6.1µs   
     http_req_connecting............: avg=214ns    min=0s         med=0s       max=2.33ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.06ms   min=-1193951ns med=880.37µs max=65.43ms p(90)=1.73ms   p(95)=2.19ms  
       { expected_response:true }...: avg=1.06ms   min=-1193951ns med=880.37µs max=65.43ms p(90)=1.73ms   p(95)=2.19ms  
     http_req_failed................: 0.00%   0 out of 1016267
     http_req_receiving.............: avg=89.54µs  min=-1581653ns med=38.4µs   max=64.57ms p(90)=167.71µs p(95)=362.69µs
     http_req_sending...............: avg=14.09µs  min=-1972410ns med=10µs     max=9ms     p(90)=15.3µs   p(95)=29.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s         med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=963.35µs min=0s         med=790.66µs max=65.39ms p(90)=1.57ms   p(95)=2ms     
     http_reqs......................: 1016267 6775.602861/s
     iteration_duration.............: avg=1.18ms   min=259.12µs   med=989.78µs max=65.52ms p(90)=1.87ms   p(95)=2.34ms  
     iterations.....................: 1016267 6775.602861/s
     vus............................: 1       min=1                  max=10
     vus_max........................: 10      min=10                 max=10