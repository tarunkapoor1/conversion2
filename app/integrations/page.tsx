import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Integrations() {
  const integrations = [
    { name: 'Google Analytics', connected: true },
    { name: 'Facebook Ads', connected: false },
    { name: 'Shopify', connected: true },
    { name: 'Mailchimp', connected: false },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Integrations</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {integrations.map((integration, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{integration.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{integration.connected ? 'Connected' : 'Not connected'}</p>
              <Button>{integration.connected ? 'Disconnect' : 'Connect'}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}