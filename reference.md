# Reference
## Merchants
<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">get</a>({ ...params }) -> Mesta.GetMerchantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves detailed information about a specific merchant, including account details and UBO (Ultimate Beneficial Owner) information.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.get({
    merchantId: "merchantId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetMerchantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MerchantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">acceptTerms</a>({ ...params }) -> Mesta.AcceptTermsMerchantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Records the merchant's acceptance of Terms of Service. Captures acceptance timestamp, user identity, and IP address.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.acceptTerms({
    merchantId: "merchantId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.AcceptTermsMerchantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MerchantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">getBalances</a>({ ...params }) -> Mesta.GetBalancesMerchantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the current balances for a merchant across all currencies and stablecoins.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.getBalances({
    merchantId: "merchantId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetBalancesMerchantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MerchantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## WalletAddresses
<details><summary><code>client.walletAddresses.<a href="/src/api/resources/walletAddresses/client/Client.ts">get</a>({ ...params }) -> Mesta.GetWalletAddressesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single source wallet address by its unique identifier.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.walletAddresses.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetWalletAddressesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletAddressesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Senders
<details><summary><code>client.senders.<a href="/src/api/resources/senders/client/Client.ts">list</a>({ ...params }) -> Mesta.ListSendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of all senders associated with a merchant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.ListSendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.<a href="/src/api/resources/senders/client/Client.ts">create</a>({ ...params }) -> Mesta.CreateSendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

## Overview
* Creates a new sender
* Supports both individual and business senders
* Includes additional onboarding fields used for compliance review
* Requirements vary by country and ownerType

## Validation Rules
* **Important**: Always check validation rules before creating a sender
* Validation rules endpoint: `GET /v2/validation-rules/senders`
* Required query parameters:
   * `ownerType=[individual|business]`
  * `country=[ISO 3166-1 alpha-2 code]`
* Example request:
```
GET /v2/validation-rules/senders?ownerType=individual&country=MX
```

## Additional v2 Notes
* `expectedMonthlyVolumeEstimate`, `averageTransactionSize`, `primaryCounterpartyJurisdictions`, `natureOfPayments`, and `sourceOfFunds` are required for both sender types
* Each value in `primaryCounterpartyJurisdictions` must be an ISO 3166-1 alpha-2 country code (for example: `US`, `IN`, `GB`)
* `isFinancialInstitution` and `numberOfEmployees` are required for business senders
* `websiteAbsenceReason` is required for business senders when `websiteUrl` is not provided
* If `isFinancialInstitution` is `true`, upload the FI registration proof using `POST /v1/senders/{senderId}/documents` with document type `fi_registration_proof` before calling `POST /v1/senders/{senderId}/verify`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.create({
    expectedMonthlyVolumeEstimate: 1.1,
    averageTransactionSize: 1.1,
    primaryCounterpartyJurisdictions: ["primaryCounterpartyJurisdictions"],
    natureOfPayments: ["payroll"],
    sourceOfFunds: "advance_from_director",
    type: "individual",
    firstName: "firstName",
    lastName: "lastName",
    birthDate: "2023-01-15",
    email: "email",
    phone: "phone",
    addresses: [{
            street: "street",
            city: "city",
            postalCode: "12345 or 00000",
            country: "country"
        }],
    identity: {
        documentType: "PASSPORT",
        countryCode: "countryCode",
        documentNumber: "documentNumber"
    },
    gender: "male",
    occupation: "accountant"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.CreateSendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.<a href="/src/api/resources/senders/client/Client.ts">get</a>({ ...params }) -> Mesta.GetSendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves detailed information about a specific sender account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.get({
    senderId: "senderId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetSendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.<a href="/src/api/resources/senders/client/Client.ts">delete</a>({ ...params }) -> Mesta.DeleteSendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a sender account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.delete({
    senderId: "senderId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.DeleteSendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.<a href="/src/api/resources/senders/client/Client.ts">update</a>({ ...params }) -> Mesta.UpdateSendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing sender's information. Note that certain fields cannot be modified after initial creation:

- type (individual/business)
- identificationNumber (for business senders)
- taxIdentificationNumber (for business senders)

Before updating a sender, always check the validation rules using:
GET /v2/validation-rules/senders?ownerType=[individual|business]&country=[ISO 3166-1 alpha-2 code]
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.update({
    senderId: "senderId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.UpdateSendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.<a href="/src/api/resources/senders/client/Client.ts">simulateVerificationResult</a>({ ...params }) -> Mesta.SimulateVerificationResultSendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Settles a pending sender verification with a simulated provider decision so you can drive onboarding end to end without waiting on the identity provider. Available in test environments only — disabled in production.

Verification must already have been started via the corresponding `/verify` call; otherwise the request is rejected with `MOCK_VERIFICATION_NOT_INITIATED`. For a business sender the same result is applied to the sender's KYB and to every UBO and unlinked associate on it, matching how the provider settles them individually.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.simulateVerificationResult({
    senderId: "senderId",
    result: "APPROVED"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.SimulateVerificationResultSendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.<a href="/src/api/resources/senders/client/Client.ts">verify</a>({ ...params }) -> Mesta.VerifySendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Runs the authoritative union of base sender, country-specific, accepted-capability, and persisted UBO/associate requirements, minus canonical data already stored. If no blockers remain, it initiates the existing verification process. If requirements are incomplete, verification does not start and the API returns actionable `CAPABILITY_REQUIREMENTS_MISSING` blockers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.verify({
    senderId: "senderId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.VerifySendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.<a href="/src/api/resources/senders/client/Client.ts">getBalances</a>({ ...params }) -> Mesta.GetBalancesSendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the account balances for a specific sender across all supported currencies. Returns an array of currency-balance pairs for all currencies where the sender has an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.getBalances({
    senderId: "senderId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetBalancesSendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.<a href="/src/api/resources/senders/client/Client.ts">simulateDeposit</a>({ ...params }) -> Mesta.SimulateDepositSendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Credits a sender's deposit account with simulated funds so you can test order flows end to end without moving real money.

**Available in test environments only.** This endpoint is disabled in production and returns `403 FORBIDDEN` there.

The credit is applied asynchronously: a successful call only confirms that the simulated deposit was accepted. The funds land once the banking provider's webhook is processed, which normally takes a few seconds. Poll `GET /v1/senders/{senderId}/balances` to confirm the balance has moved.

**Limits**

- `amount` must be greater than `0` and no more than `200` per request. Repeat the call to fund larger balances.
- Rate limited to 10 requests per 2 hours for this endpoint, counted per source IP address. Every rejected request also consumes quota, including `401`, `403`, `400` and `404` responses.
- Simulated deposits are only supported for deposit accounts held with a banking provider that offers a deposit simulator. Accounts on other providers return `MOCK_DEPOSIT_NOT_SUPPORTED_FOR_ACCOUNT`.

**Permissions**

The API key must carry the `merchant:sender:write` permission (`merchant:*:*` also matches). Without it the request is rejected with `403 FORBIDDEN`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.simulateDeposit({
    senderId: "senderId",
    amount: 1.1,
    currency: "USD"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.SimulateDepositSendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Beneficiaries
<details><summary><code>client.beneficiaries.<a href="/src/api/resources/beneficiaries/client/Client.ts">delete</a>({ ...params }) -> Mesta.DeleteBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a beneficiary account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beneficiaries.delete({
    beneficiaryId: "beneficiaryId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.DeleteBeneficiariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beneficiaries.<a href="/src/api/resources/beneficiaries/client/Client.ts">simulateVerificationResult</a>({ ...params }) -> Mesta.SimulateVerificationResultBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Settles a pending beneficiary verification with a simulated provider decision so you can drive onboarding end to end without waiting on the identity provider. Available in test environments only — disabled in production.

Verification must already have been started via the corresponding `/verify` call; otherwise the request is rejected with `MOCK_VERIFICATION_NOT_INITIATED`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beneficiaries.simulateVerificationResult({
    beneficiaryId: "beneficiaryId",
    result: "APPROVED"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.SimulateVerificationResultBeneficiariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beneficiaries.<a href="/src/api/resources/beneficiaries/client/Client.ts">verify</a>({ ...params }) -> Mesta.VerifyBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Verifies a specific beneficiary account by initiating sanction/watchlist screenings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beneficiaries.verify({
    beneficiaryId: "beneficiaryId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.VerifyBeneficiariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beneficiaries.<a href="/src/api/resources/beneficiaries/client/Client.ts">lookupBank</a>({ ...params }) -> Mesta.LookupBankBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of bank Ids for a specific country.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beneficiaries.lookupBank({
    countryCode: "countryCode"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.LookupBankBeneficiariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beneficiaries.<a href="/src/api/resources/beneficiaries/client/Client.ts">list</a>({ ...params }) -> Mesta.ListBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a paginated list of beneficiaries using the V2 API. Unlike v1, the v2 API separates payment methods from beneficiary data. Payment methods are available on the detail endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beneficiaries.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.ListBeneficiariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beneficiaries.<a href="/src/api/resources/beneficiaries/client/Client.ts">get</a>({ ...params }) -> Mesta.GetBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single beneficiary by ID with their associated payment methods.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beneficiaries.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetBeneficiariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beneficiaries.<a href="/src/api/resources/beneficiaries/client/Client.ts">update</a>({ ...params }) -> Mesta.UpdateBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Partially update a beneficiary. Only the provided fields will be updated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beneficiaries.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.UpdateBeneficiariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beneficiaries.<a href="/src/api/resources/beneficiaries/client/Client.ts">create</a>({ ...params }) -> Mesta.CreateBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new beneficiary with mandatory compliance fields. Same as V2 but `beneficiaryRelationship` and `purposeOfPayment` are required.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beneficiaries.create({
    type: "individual",
    address: {
        street: "123 Main St",
        city: "Manila",
        postalCode: "1000",
        country: "PH"
    },
    paymentMethods: [{
            type: "bank_account",
            data: {
                "key": "value"
            }
        }],
    beneficiaryRelationship: "business_partner",
    purposeOfPayment: "payroll"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.CreateBeneficiariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Quotes
<details><summary><code>client.quotes.<a href="/src/api/resources/quotes/client/Client.ts">get</a>({ ...params }) -> Mesta.GetQuotesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the details of a specific quote by its unique identifier (quoteId).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quotes.get({
    quoteId: "quoteId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetQuotesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.quotes.<a href="/src/api/resources/quotes/client/Client.ts">list</a>({ ...params }) -> Mesta.ListQuotesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a paginated list of quotes with optional filtering.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quotes.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.ListQuotesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.quotes.<a href="/src/api/resources/quotes/client/Client.ts">create</a>({ ...params }) -> Mesta.CreateQuotesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Obtain a quote for converting USD or USDC to another specified currency. For web3 merchants, sourceCurrency is required and must be a stable coin. For web2 merchants, sourceCurrency is optional and defaults to USD if omitted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quotes.create({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.CreateQuotesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Orders
<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">list</a>({ ...params }) -> Mesta.ListOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of orders for the authenticated user, with optional filters to narrow down results based on status, date range, target currency, or other relevant criteria.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.ListOrdersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">get</a>({ ...params }) -> Mesta.GetOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves detailed information about a specific order, including its current status and progress.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.get({
    orderId: "orderId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetOrdersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">getDepositWalletAddress</a>({ ...params }) -> Mesta.GetDepositWalletAddressOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the deposit wallet address for a specific order
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.getDepositWalletAddress({
    orderId: "7f916142-a6ba-45ca-9d7e-ff6f93091efc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetDepositWalletAddressOrdersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">getDepositBankAccount</a>({ ...params }) -> Mesta.GetDepositBankAccountOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the deposit bank account details for onramp orders. This endpoint provides bank account information where funds should be deposited to complete the order.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.getDepositBankAccount({
    orderId: "orderId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetDepositBankAccountOrdersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">cancel</a>({ ...params }) -> Mesta.CancelOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels an existing order. The order must be in a cancellable state.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.cancel({
    orderId: "orderId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.CancelOrdersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">create</a>({ ...params }) -> Mesta.CreateOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new order using a payment method ID. This is the recommended way to create orders. Requires an accepted quote, a sender, and a payment method.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.create({
    senderId: "550e8400-e29b-41d4-a716-446655440001",
    paymentMethodId: "550e8400-e29b-41d4-a716-446655440002",
    acceptedQuoteId: "550e8400-e29b-41d4-a716-446655440003"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.CreateOrdersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">listEvents</a>({ ...params }) -> Mesta.ListEventsOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the event history for a specific order. Returns a chronological list of state transitions and their timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.listEvents({
    orderId: "orderId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.ListEventsOrdersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Webhooks
<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">list</a>({ ...params }) -> Mesta.ListWebhooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of all registered webhooks for the calling client.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.ListWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">create</a>({ ...params }) -> Mesta.CreateWebhooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Registers a new webhook for a specific event.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.create({
    events: ["order:*", "sender:kyb_approved", "fiat_deposit:settled"],
    url: "https://example.com/webhooks/mesta"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.CreateWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">get</a>({ ...params }) -> Mesta.GetWebhooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specific webhook by its unique identifier.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">delete</a>({ ...params }) -> Mesta.DeleteWebhooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a registered webhook.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.DeleteWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">update</a>({ ...params }) -> Mesta.UpdateWebhooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a registered webhook.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.update({
    id: "id",
    events: ["order:*"],
    url: "url"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.UpdateWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PaymentMethods
<details><summary><code>client.paymentMethods.<a href="/src/api/resources/paymentMethods/client/Client.ts">list</a>({ ...params }) -> Mesta.ListPaymentMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of payment methods. Filter by beneficiary, type, or status.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethods.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.ListPaymentMethodsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethods.<a href="/src/api/resources/paymentMethods/client/Client.ts">create</a>({ ...params }) -> Mesta.CreatePaymentMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new payment method for a beneficiary. The payment method type determines the required data fields.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethods.create({
    beneficiaryId: "550e8400-e29b-41d4-a716-446655440001",
    type: "bank_account",
    data: {
        accountNumber: "1234567890"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.CreatePaymentMethodRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethods.<a href="/src/api/resources/paymentMethods/client/Client.ts">get</a>({ ...params }) -> Mesta.GetPaymentMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific payment method by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethods.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetPaymentMethodsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethods.<a href="/src/api/resources/paymentMethods/client/Client.ts">update</a>({ ...params }) -> Mesta.UpdatePaymentMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing payment method. All required fields must be provided.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethods.update({
    id: "id",
    type: "bank_account",
    data: {
        accountNumber: "1234567890"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.UpdatePaymentMethodRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethods.<a href="/src/api/resources/paymentMethods/client/Client.ts">delete</a>({ ...params }) -> Mesta.DeletePaymentMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a payment method by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethods.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.DeletePaymentMethodsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethods.<a href="/src/api/resources/paymentMethods/client/Client.ts">decideConsent</a>({ ...params }) -> Mesta.DecideConsentPaymentMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Approve or decline a payment method that requires user consent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethods.decideConsent({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.ConsentDecisionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ValidationRules
<details><summary><code>client.validationRules.<a href="/src/api/resources/validationRules/client/Client.ts">listStates</a>({ ...params }) -> Mesta.ListStatesValidationRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of states/provinces for a given country code. Returns state codes in ISO 3166-2 format.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.listStates({
    country: "US"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.ListStatesValidationRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValidationRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Events
<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">list</a>({ ...params }) -> Mesta.ListEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of external events. Filter by aggregate type, merchant, or event name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.ListEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Auth
<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">merchantLogin</a>({ ...params }) -> Mesta.MerchantLoginAuthResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Authenticates a merchant user with email and password. Returns access and refresh tokens upon successful authentication. Supports MFA via TOTP.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.merchantLogin({
    email: "email",
    password: "password"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.MerchantLoginAuthRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">authorize</a>({ ...params }) -> Mesta.AuthorizeAuthResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates an access token or API key and returns the authenticated principal with their permissions. Used internally for request authorization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.authorize();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.AuthorizeAuthRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ApiKeys
<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">list</a>({ ...params }) -> Mesta.ListApiKeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a paginated list of API keys for the merchant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.ListApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">create</a>({ ...params }) -> Mesta.CreateApiKeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new API key for the merchant. The API secret is only returned in the creation response and cannot be retrieved later.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.create({
    name: "name",
    permissions: ["permissions"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.CreateApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">get</a>({ ...params }) -> Mesta.GetApiKeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves details of a specific API key by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.GetApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently deletes an API key. This action cannot be undone.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.DeleteApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">update</a>({ ...params }) -> Mesta.UpdateApiKeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the name and/or permissions of an existing API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.UpdateApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfers
<details><summary><code>client.transfers.<a href="/src/api/resources/transfers/client/Client.ts">create</a>({ ...params }) -> Mesta.CreateTransfersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an internal transfer that moves funds between two verified senders belonging to your merchant account. Funds move on Mesta's internal ledger from the source sender's USD balance to the recipient sender's USD balance — no external payment rails are involved.

> 🚧 Limited availability — enabled on request only
>
> Internal transfers are **not enabled by default**. This capability is only enabled for select merchants and approved use cases. To discuss enabling internal transfers for your account, please reach out to our [Support Team](mailto:support@mesta.xyz).

**Flow**
1. Create an internal quote via `POST /v1/quotes` with `transferType: "internal"`, `sourceCurrency: "USD"` and `targetCurrency: "USD"`.
2. Call this endpoint with the quote id as `acceptedQuoteId` before the quote expires. A quote can fund at most one transfer.

Internal transfers are order-backed: the response is a standard order with `transferType: "internal"`, the transfer appears in `GET /v1/orders` and `GET /v1/orders/{orderId}`, and it emits the standard order webhook events. The lifecycle is `created` → `funds_received` → `success`.

**Requirements**
- Both senders must belong to your merchant account and be verified and active.
- Both senders must be enabled for internal transfers (USD).
- The source sender's USD balance must cover the quote's gross source amount (amount + fees).
- The source and recipient sender must be different (self-transfers are rejected).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfers.create({
    senderId: "877157e3-5433-4a17-b89e-92bb2709fc44",
    beneficiarySenderId: "3f1f8dcb-42a5-4c46-a41b-2f7f2f6a9f10",
    acceptedQuoteId: "ad0d23ef-8482-47a1-bb08-d2556f4347e5"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.CreateTransfersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransfersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Beneficiaries Documents
<details><summary><code>client.beneficiaries.documents.<a href="/src/api/resources/beneficiaries/resources/documents/client/Client.ts">getPresignedUrl</a>({ ...params }) -> Mesta.GetPresignedUrlDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generates a pre-signed URL to download a beneficiary's uploaded document. The URL expires after 300 seconds.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beneficiaries.documents.getPresignedUrl({
    beneficiaryId: "beneficiaryId",
    documentId: "documentId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.beneficiaries.GetPresignedUrlDocumentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beneficiaries.documents.<a href="/src/api/resources/beneficiaries/resources/documents/client/Client.ts">getPurposeOfPaymentPresignedUrl</a>({ ...params }) -> Mesta.GetPurposeOfPaymentPresignedUrlDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a pre-signed URL for downloading the purpose of payment document attached to a beneficiary. The URL expires in 300 seconds.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beneficiaries.documents.getPurposeOfPaymentPresignedUrl({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.beneficiaries.GetPurposeOfPaymentPresignedUrlDocumentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Merchants Accounts
<details><summary><code>client.merchants.accounts.<a href="/src/api/resources/merchants/resources/accounts/client/Client.ts">list</a>({ ...params }) -> Mesta.ListAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the list of merchant accounts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.accounts.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.merchants.ListAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.merchants.accounts.<a href="/src/api/resources/merchants/resources/accounts/client/Client.ts">listBalances</a>() -> Mesta.ListBalancesAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the current balances for all merchant accounts across different currencies.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.accounts.listBalances();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.merchants.accounts.<a href="/src/api/resources/merchants/resources/accounts/client/Client.ts">listSenderBalances</a>({ ...params }) -> Mesta.ListSenderBalancesAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the current balances for all senders, optionally filtered by currency.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.accounts.listSenderBalances({
    currency: "USD"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.merchants.ListSenderBalancesAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Merchants Transactions
<details><summary><code>client.merchants.transactions.<a href="/src/api/resources/merchants/resources/transactions/client/Client.ts">list</a>({ ...params }) -> Mesta.ListTransactionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a paginated list of merchant transactions with optional filtering.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.transactions.list({
    sortBy: "createdAt"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.merchants.ListTransactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Merchants StablecoinDeposits
<details><summary><code>client.merchants.stablecoinDeposits.<a href="/src/api/resources/merchants/resources/stablecoinDeposits/client/Client.ts">list</a>({ ...params }) -> Mesta.ListStablecoinDepositsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of stablecoin deposits for a merchant. Supports filtering by currency, status, sender, and risk level.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.stablecoinDeposits.list({
    search: "abc123",
    merchantId: "550e8400-e29b-41d4-a716-446655440000",
    senderId: "550e8400-e29b-41d4-a716-446655440001",
    sourceWalletAddress: "0x1234567890abcdef1234567890abcdef12345678",
    depositWalletAddressId: "550e8400-e29b-41d4-a716-446655440002"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.merchants.ListStablecoinDepositsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StablecoinDepositsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.merchants.stablecoinDeposits.<a href="/src/api/resources/merchants/resources/stablecoinDeposits/client/Client.ts">get</a>({ ...params }) -> Mesta.GetStablecoinDepositsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific stablecoin deposit by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.stablecoinDeposits.get({
    id: "550e8400-e29b-41d4-a716-446655440000"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.merchants.GetStablecoinDepositsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StablecoinDepositsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Merchants FiatDeposits
<details><summary><code>client.merchants.fiatDeposits.<a href="/src/api/resources/merchants/resources/fiatDeposits/client/Client.ts">list</a>({ ...params }) -> Mesta.ListFiatDepositsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of fiat deposits for a merchant. Only completed deposits are returned. Supports filtering by currency, sender, and deposit bank account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.fiatDeposits.list({
    search: "abc123",
    merchantId: "550e8400-e29b-41d4-a716-446655440000",
    senderId: "550e8400-e29b-41d4-a716-446655440001",
    depositBankAccountId: "550e8400-e29b-41d4-a716-446655440002"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.merchants.ListFiatDepositsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FiatDepositsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.merchants.fiatDeposits.<a href="/src/api/resources/merchants/resources/fiatDeposits/client/Client.ts">get</a>({ ...params }) -> Mesta.GetFiatDepositsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific fiat deposit by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.fiatDeposits.get({
    id: "550e8400-e29b-41d4-a716-446655440000"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.merchants.GetFiatDepositsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FiatDepositsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Merchants SourceWalletAddresses
<details><summary><code>client.merchants.sourceWalletAddresses.<a href="/src/api/resources/merchants/resources/sourceWalletAddresses/client/Client.ts">list</a>({ ...params }) -> Mesta.ListSourceWalletAddressesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all source wallet addresses for a specific merchant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.sourceWalletAddresses.list({
    merchantId: "merchantId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.merchants.ListSourceWalletAddressesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceWalletAddressesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.merchants.sourceWalletAddresses.<a href="/src/api/resources/merchants/resources/sourceWalletAddresses/client/Client.ts">create</a>({ ...params }) -> Mesta.CreateSourceWalletAddressesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates source wallet addresses for a merchant. Accepts an array of addresses.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.sourceWalletAddresses.create({
    merchantId: "merchantId",
    body: [{
            address: "address",
            chain: "chain"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.merchants.CreateSourceWalletAddressesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceWalletAddressesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.merchants.sourceWalletAddresses.<a href="/src/api/resources/merchants/resources/sourceWalletAddresses/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specific source wallet address for a merchant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.sourceWalletAddresses.delete({
    merchantId: "merchantId",
    sourceWalletAddressId: "sourceWalletAddressId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.merchants.DeleteSourceWalletAddressesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceWalletAddressesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Orders Documents
<details><summary><code>client.orders.documents.<a href="/src/api/resources/orders/resources/documents/client/Client.ts">getPresignedUrl</a>({ ...params }) -> Mesta.GetPresignedUrlDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a temporary presigned URL for downloading an order document. The URL expires after 5 minutes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.documents.getPresignedUrl({
    orderId: "orderId",
    documentId: "documentId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.orders.GetPresignedUrlDocumentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Senders Associates
<details><summary><code>client.senders.associates.<a href="/src/api/resources/senders/resources/associates/client/Client.ts">list</a>({ ...params }) -> Mesta.SenderAssociateListEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the Directors and Authorized Representatives belonging to the specified sender.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.associates.list({
    senderId: "senderId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.ListAssociatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.associates.<a href="/src/api/resources/senders/resources/associates/client/Client.ts">create</a>({ ...params }) -> Mesta.SenderAssociateEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a Director or Authorized Representative to a business sender. Use linkedUboId when the representative is the same person as an existing UBO; otherwise provide the person's own personal, address, identity, nationality, and document data.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.associates.create({
    senderId: "7e701fe5-d47b-4e44-b624-c48204cfead1",
    roles: ["director"],
    linkedUboId: "c4de346d-7972-4139-b132-974eca8b0606"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.CreateSenderAssociateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.associates.<a href="/src/api/resources/senders/resources/associates/client/Client.ts">get</a>({ ...params }) -> Mesta.SenderAssociateEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns one Director or Authorized Representative.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.associates.get({
    associateId: "associateId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.GetAssociatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.associates.<a href="/src/api/resources/senders/resources/associates/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the representative. An approved unlinked representative cannot be deleted; a linked representative uses the UBO's verification outcome.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.associates.delete({
    associateId: "associateId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.DeleteAssociatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.associates.<a href="/src/api/resources/senders/resources/associates/client/Client.ts">update</a>({ ...params }) -> Mesta.SenderAssociateEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a Director or Authorized Representative. linkedUboId cannot be newly assigned or changed after creation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.associates.update({
    associateId: "associateId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.PatchSenderAssociateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.associates.<a href="/src/api/resources/senders/resources/associates/client/Client.ts">getVerificationUrl</a>({ ...params }) -> Mesta.AssociateSelfieVerificationEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the latest selfie-verification session for an unlinked Director or Authorized Representative. Omit action to read the current session, use GENERATE only when no session exists, and use REGENERATE only when the latest session is DECLINED or EXPIRED. A representative linked through linkedUboId reuses the UBO verification session and must use the UBO verification endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.associates.getVerificationUrl({
    associateId: "associateId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.GetVerificationUrlAssociatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Senders VirtualBankAccounts
<details><summary><code>client.senders.virtualBankAccounts.<a href="/src/api/resources/senders/resources/virtualBankAccounts/client/Client.ts">getSetupStatus</a>({ ...params }) -> Mesta.VirtualAccountSetupEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the sender's current virtual bank account status for the currency. No request ID is required. This read can reconcile status but cannot start account setup. The endpoint follows the sender's current account configuration; if Mesta changes that configuration, a request associated with the previous configuration is no longer returned and the merchant should POST again for the current configuration.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.virtualBankAccounts.getSetupStatus({
    senderId: "senderId",
    currency: "USD"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.GetSetupStatusVirtualBankAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualBankAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.virtualBankAccounts.<a href="/src/api/resources/senders/resources/virtualBankAccounts/client/Client.ts">requestSetup</a>({ ...params }) -> Mesta.VirtualAccountSetupEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or reuses the current virtual bank account request for this sender and currency. It is evaluated immediately and may begin setup automatically when all requirements are satisfied. Follow returned blocker actions when more information or verification is needed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.virtualBankAccounts.requestSetup({
    senderId: "senderId",
    currency: "USD"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.RequestSetupVirtualBankAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualBankAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.virtualBankAccounts.<a href="/src/api/resources/senders/resources/virtualBankAccounts/client/Client.ts">cancelSetup</a>({ ...params }) -> Mesta.VirtualAccountSetupEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels the current request before account setup begins or after failure. Provisioning and completed requests cannot be cancelled. A later POST creates a fresh current request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.virtualBankAccounts.cancelSetup({
    senderId: "senderId",
    currency: "USD"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.CancelSetupVirtualBankAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualBankAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.virtualBankAccounts.<a href="/src/api/resources/senders/resources/virtualBankAccounts/client/Client.ts">updateSetupData</a>({ ...params }) -> Mesta.VirtualAccountSetupEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fills supported missing sender, UBO, or existing-representative values, then re-evaluates the current setup request. Fields that are not current blockers are skipped and identified in unacceptedFields; other submitted fields are still processed. Existing values cannot be overwritten. To reuse the registered address as the trading address, set senderDetails.tradingAddressSameAsRegistered to true. If a manual tradingAddress is also supplied, the reuse flag takes precedence. Documents and new representatives use their dedicated APIs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.virtualBankAccounts.updateSetupData({
    senderId: "senderId",
    currency: "USD",
    senderDetails: {
        websiteUrl: "https://example.com",
        tradingAddressSameAsRegistered: true
    },
    uboDetails: [{
            uboId: "c4de346d-7972-4139-b132-974eca8b0606",
            birthDate: "1990-01-01",
            nationality: "GB"
        }],
    associateDetails: [{
            associateId: "a5de346d-7972-4139-b132-974eca8b0606",
            nationality: "GB",
            birthDate: "1985-01-01"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.UpdateVirtualAccountSetupData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualBankAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.virtualBankAccounts.<a href="/src/api/resources/senders/resources/virtualBankAccounts/client/Client.ts">get</a>({ ...params }) -> Mesta.SenderVirtualAccountsEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the virtual bank accounts available to the sender for the requested currency. The response is an array and currently contains at most one account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.virtualBankAccounts.get({
    senderId: "senderId",
    currency: "USD"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.GetVirtualBankAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualBankAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Senders SourceWalletAddresses
<details><summary><code>client.senders.sourceWalletAddresses.<a href="/src/api/resources/senders/resources/sourceWalletAddresses/client/Client.ts">list</a>({ ...params }) -> Mesta.ListSourceWalletAddressesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all source wallet addresses for a specific sender. Supports pagination, sorting, and search.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.sourceWalletAddresses.list({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.ListSourceWalletAddressesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceWalletAddressesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.sourceWalletAddresses.<a href="/src/api/resources/senders/resources/sourceWalletAddresses/client/Client.ts">create</a>({ ...params }) -> Mesta.CreateSourceWalletAddressesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates new source addresses for a specific sender. Multiple addresses can be created in a single request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.sourceWalletAddresses.create({
    id: "id",
    body: [{
            address: "address",
            chain: "chain"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.CreateSourceWalletAddressesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceWalletAddressesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.sourceWalletAddresses.<a href="/src/api/resources/senders/resources/sourceWalletAddresses/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specific source wallet address for a sender.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.sourceWalletAddresses.delete({
    id: "id",
    sourceWalletAddressId: "sourceWalletAddressId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.DeleteSourceWalletAddressesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceWalletAddressesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Senders Ubos
<details><summary><code>client.senders.ubos.<a href="/src/api/resources/senders/resources/ubos/client/Client.ts">create</a>({ ...params }) -> Mesta.CreateUbosResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new UBO (Ultimate Beneficial Owner) for a specific sender. Note: Document requirements (documentFront, documentBack) vary by country. Please refer to the validation-rules endpoint with ownerType='business' and the specific country to determine exact documentation requirements. Multiple UBOs can be added by calling this endpoint multiple times. The total ownership percentage across all UBOs should not exceed 100%.

Additional v2 details:
* `pepDeclaration` is required.
* `verificationReport` and `verificationReportFileName` are supported.
* The total request payload size must be less than 10 MB.
* `sofDocument` is required when any of the following is true:
  * UBO age is less than 25
  * UBO age is greater than 60
  * `pepDeclaration` is `true`
  * `address.country` is one of: `DZ`, `AO`, `BO`, `BG`, `BF`, `CM`, `CI`, `ET`, `HT`, `IQ`, `KE`, `LA`, `LB`, `ML`, `MC`, `MZ`, `NA`, `NP`, `NI`, `NG`, `SO`, `SY`, `VN`, `VG`, `YE`
  * `identity.countryCode` is one of: `DZ`, `AO`, `BO`, `BG`, `BF`, `CM`, `CI`, `ET`, `HT`, `IQ`, `KE`, `LA`, `LB`, `ML`, `MC`, `MZ`, `NA`, `NP`, `NI`, `NG`, `SO`, `SY`, `VN`, `VG`, `YE`
* `pepQuestionnaire` is supported. It is required when `pepDeclaration` is `true`.
* `pepQuestionnaire.declarationType` controls which section is required: `self` (for `SELF`) or `association` (for `IMMEDIATE_FAMILY` and `CLOSE_ASSOCIATE`).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.ubos.create({
    firstName: "firstName",
    lastName: "lastName",
    birthDate: "2023-01-15",
    phone: "phone",
    email: "email",
    ownershipPercent: 1.1,
    address: {
        street: "street",
        city: "city",
        postalCode: "postalCode",
        country: "country"
    },
    senderId: "senderId",
    identity: {
        documentType: "PASSPORT",
        countryCode: "countryCode",
        documentNumber: "documentNumber"
    },
    pepDeclaration: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.CreateUbosRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UbosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.ubos.<a href="/src/api/resources/senders/resources/ubos/client/Client.ts">get</a>({ ...params }) -> Mesta.GetUbosResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves details of a specific Ultimate Beneficial Owner (UBO)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.ubos.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.GetUbosRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UbosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.ubos.<a href="/src/api/resources/senders/resources/ubos/client/Client.ts">delete</a>({ ...params }) -> Mesta.DeleteUbosResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an existing UBO (Ultimate Beneficial Owner)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.ubos.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.DeleteUbosRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UbosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.ubos.<a href="/src/api/resources/senders/resources/ubos/client/Client.ts">update</a>({ ...params }) -> Mesta.UpdateUbosResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing Ultimate Beneficial Owner (UBO). In addition to the base UBO fields, this endpoint supports `pepDeclaration`, `verificationReport`, and `sofDocument`. `sofDocument` is required when the UBO is younger than 25 or older than 60, when `pepDeclaration` is `true`, or when either `address.country` or `identity.countryCode` is one of: `DZ`, `AO`, `BO`, `BG`, `BF`, `CM`, `CI`, `ET`, `HT`, `IQ`, `KE`, `LA`, `LB`, `ML`, `MC`, `MZ`, `NA`, `NP`, `NI`, `NG`, `SO`, `SY`, `VN`, `VG`, `YE`. `pepQuestionnaire` is supported. When `pepDeclaration` is `true`, include `pepQuestionnaire` with `declarationType` and the matching conditional section (`self` or `association`).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.ubos.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.UpdateUbosRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UbosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.ubos.<a href="/src/api/resources/senders/resources/ubos/client/Client.ts">getVerificationUrl</a>({ ...params }) -> Mesta.GetVerificationUrlUbosResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches the latest selfie verification session for a UBO and, optionally, generates or regenerates a verification link.

Action behavior:
* no `action`: return the current verification-session state without creating a new link.
* `GENERATE`: create the first verification link only when no previous selfie session exists.
* `REGENERATE`: create a fresh verification link only when the latest session is `DECLINED` or `EXPIRED`.

Response behavior:
* `latestSession`: the most recent selfie verification session, or `null` if none exists.
* `previousSessions`: older selfie verification sessions in reverse chronological order.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.ubos.getVerificationUrl({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.GetVerificationUrlUbosRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UbosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Senders Documents
<details><summary><code>client.senders.documents.<a href="/src/api/resources/senders/resources/documents/client/Client.ts">upload</a>({ ...params }) -> Mesta.UploadDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads one Base64-encoded document for a specific sender. Use type `directors_registry` for a Directors' and shareholders' registry. Multiple registry files are supported by calling this endpoint once per file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.documents.upload({
    senderId: "senderId",
    fileName: "fileName",
    type: "",
    blob: "blob"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.UploadDocumentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.documents.<a href="/src/api/resources/senders/resources/documents/client/Client.ts">delete</a>({ ...params }) -> Mesta.DeleteDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specific document associated with a sender.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.documents.delete({
    senderId: "senderId",
    documentId: "documentId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.DeleteDocumentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Senders TermsOfService
<details><summary><code>client.senders.termsOfService.<a href="/src/api/resources/senders/resources/termsOfService/client/Client.ts">getStatus</a>({ ...params }) -> Mesta.GetStatusTermsOfServiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the current Terms of Service acceptance status for a specific sender, along with the active shareable acceptance link. In the current sender flow, a TOS acceptance link is generated during sender creation. Use this endpoint to check whether the sender has accepted the TOS, retrieve the active acceptance link, and verify whether the link has expired.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.termsOfService.getStatus({
    senderId: "senderId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.GetStatusTermsOfServiceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TermsOfServiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.senders.termsOfService.<a href="/src/api/resources/senders/resources/termsOfService/client/Client.ts">getAcceptance</a>({ ...params }) -> Mesta.GetAcceptanceTermsOfServiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the Terms of Service acceptance details for a given token. This is a public endpoint that does not require authentication.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.termsOfService.getAcceptance({
    token: "token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.GetAcceptanceTermsOfServiceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TermsOfServiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Senders DepositBankAccounts
<details><summary><code>client.senders.depositBankAccounts.<a href="/src/api/resources/senders/resources/depositBankAccounts/client/Client.ts">generateOnDemand</a>({ ...params }) -> Mesta.GenerateOnDemandDepositBankAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Initiates the creation of a deposit bank account for a sender on demand, in the requested currency.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.senders.depositBankAccounts.generateOnDemand({
    id: "id",
    currency: "EUR"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.senders.GenerateOnDemandDepositBankAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DepositBankAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ValidationRules Senders
<details><summary><code>client.validationRules.senders.<a href="/src/api/resources/validationRules/resources/senders/client/Client.ts">getV1</a>({ ...params }) -> Mesta.GetV1SendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all validation rules required for creating a sender in a specific country. Use these rules to validate sender information before submission.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.senders.getV1({
    ownerType: "individual",
    country: "country"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.validationRules.GetV1SendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.validationRules.senders.<a href="/src/api/resources/validationRules/resources/senders/client/Client.ts">getUboRulesV1</a>({ ...params }) -> Mesta.GetUboRulesV1SendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves validation rules for UBO information based on country and owner type. These rules specify all required fields for UBO verification.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.senders.getUboRulesV1({
    ownerType: "individual",
    country: "country"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.validationRules.GetUboRulesV1SendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.validationRules.senders.<a href="/src/api/resources/validationRules/resources/senders/client/Client.ts">listDocumentTypesV1</a>({ ...params }) -> Mesta.ListDocumentTypesV1SendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the list of required documents for sender verification. This includes business registration documents and identity proofs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.senders.listDocumentTypesV1({
    ownerType: "individual",
    country: "country"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.validationRules.ListDocumentTypesV1SendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.validationRules.senders.<a href="/src/api/resources/validationRules/resources/senders/client/Client.ts">getV2</a>({ ...params }) -> Mesta.GetV2SendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all validation rules required for creating a sender in a specific country. V2 adds structured `supportedDocumentTypes` on identity fields, indicating which document types are available per country and their file upload requirements. The `documentNumber`, `documentFront`, and `documentBack` nested fields are removed as their requirements are conveyed by `supportedDocumentTypes`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.senders.getV2({
    ownerType: "individual",
    country: "country"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.validationRules.GetV2SendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.validationRules.senders.<a href="/src/api/resources/validationRules/resources/senders/client/Client.ts">getUboRulesV2</a>({ ...params }) -> Mesta.GetUboRulesV2SendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves validation rules for UBO (Ultimate Beneficial Owner) information. V2 adds structured `supportedDocumentTypes` on the identity documentType field, indicating available document types per country and their file upload requirements.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.senders.getUboRulesV2({
    ownerType: "business",
    country: "country"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.validationRules.GetUboRulesV2SendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.validationRules.senders.<a href="/src/api/resources/validationRules/resources/senders/client/Client.ts">listDocumentTypesV2</a>({ ...params }) -> Mesta.ListDocumentTypesV2SendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the list of required documents for sender verification. This includes business registration documents and identity proofs. Same as V1.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.senders.listDocumentTypesV2({
    ownerType: "individual",
    country: "country"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.validationRules.ListDocumentTypesV2SendersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.validationRules.senders.<a href="/src/api/resources/validationRules/resources/senders/client/Client.ts">listCountries</a>() -> Mesta.ListCountriesSendersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of countries from which senders can originate payments.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.senders.listCountries();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `SendersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ValidationRules Beneficiaries
<details><summary><code>client.validationRules.beneficiaries.<a href="/src/api/resources/validationRules/resources/beneficiaries/client/Client.ts">get</a>({ ...params }) -> Mesta.GetBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all validation rules required for creating a beneficiary, including required fields and payment information requirements.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.beneficiaries.get({
    ownerType: "individual",
    country: "country"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.validationRules.GetBeneficiariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.validationRules.beneficiaries.<a href="/src/api/resources/validationRules/resources/beneficiaries/client/Client.ts">listDocumentTypes</a>({ ...params }) -> Mesta.ListDocumentTypesBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the list of required documents for beneficiary verification based on country and owner type. Note that some countries may not require any documents.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.beneficiaries.listDocumentTypes({
    ownerType: "individual",
    country: "country"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.validationRules.ListDocumentTypesBeneficiariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.validationRules.beneficiaries.<a href="/src/api/resources/validationRules/resources/beneficiaries/client/Client.ts">listPaymentTypes</a>({ ...params }) -> Mesta.ListPaymentTypesBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the list of supported payment types and their required fields for a beneficiary in a specific country. Use this to determine what payment information needs to be collected.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.beneficiaries.listPaymentTypes({
    ownerType: "individual",
    country: "country"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mesta.validationRules.ListPaymentTypesBeneficiariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.validationRules.beneficiaries.<a href="/src/api/resources/validationRules/resources/beneficiaries/client/Client.ts">listCountries</a>() -> Mesta.ListCountriesBeneficiariesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of countries to which payments can be delivered.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.validationRules.beneficiaries.listCountries();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `BeneficiariesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

