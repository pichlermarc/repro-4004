import {HttpInstrumentation} from "@opentelemetry/instrumentation-http";
import {NodeSDK} from "@opentelemetry/sdk-node";
import {AlwaysOffSampler} from "@opentelemetry/sdk-trace-base";

new NodeSDK({
    instrumentations: [
        new HttpInstrumentation(),
    ],
    sampler: new AlwaysOffSampler(),
}).start();