import { Module } from "@nestjs/common";
import { WarehouseModule } from "./warehouse/warehouse.module";
import { ProductModule } from "./product/product.module";
import { TenantModule } from "./tenant/tenant.module";
import { ProductVariantModule } from "./productVariant/productVariant.module";
import { StockTransferModule } from "./stockTransfer/stockTransfer.module";
import { StockMovementModule } from "./stockMovement/stockMovement.module";
import { CategoryModule } from "./category/category.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    WarehouseModule,
    ProductModule,
    TenantModule,
    ProductVariantModule,
    StockTransferModule,
    StockMovementModule,
    CategoryModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
