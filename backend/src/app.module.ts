import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthGuard } from "./common/guards/auth.guard";
import { LoggerMiddleware } from "./common/middlewares/logger.middleware";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
