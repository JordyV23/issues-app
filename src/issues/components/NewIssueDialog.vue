<script setup lang="ts">
import { ref, watch } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import useIssueMutation from '../composables/useIssueMutation';

interface Props {
  isOpen: boolean;
  labels: string[];
}

interface Emits {
  (e: 'onClose'): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const { issueMutation } = useIssueMutation();

const isOpened = ref<boolean>(false);

const title = ref<string>('');
const body = ref<string>('');
const gitLabels = ref<string[]>([]);

watch(props, () => {
  isOpened.value = props.isOpen;
});

watch(
  () => issueMutation.isSuccess.value,
  (isSuccess) => {
    if (isSuccess) {
      title.value = '';
      body.value = '';
      gitLabels.value = [];

      issueMutation.reset();
      emits('onClose');
    }
  }
);
</script>

<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="isOpened" position="bottom" persistent>
      <q-card style="width: 500px">
        <q-form
          @submit="issueMutation.mutate({ title, body, labels: gitLabels })"
        >
          <q-linear-progress :value="1" color="primary" />

          <q-card-section class="column no-wrap">
            <div>
              <div class="text-weight-bold">New Issue</div>
              <div class="text-grey">Add new issue with labels</div>
            </div>

            <q-space />

            <div>
              <q-input
                dense
                filled
                v-model="title"
                label="Title"
                placerholder="Issue Title"
                class="q-mb-sm"
                :rules="[(val) => !!val || 'Field is Required']"
              />

              <q-select
                dense
                filled
                v-model="gitLabels"
                multiple
                :options="props.labels"
                use-chips
                stack-label
                label="Multiple Selection"
                class="q-mb-sm"
              />

              <!--TODO: Markdown editor -->
              <MdEditor
                v-model="body"
                placeholder="# Markdown"
                language="en-US"
              />
            </div>
          </q-card-section>

          <q-card-actions align="left">
            <q-btn
              :disable="issueMutation.isLoading.value"
              flat
              label="Close"
              v-close-popup
              color="dark"
              @click="emits('onClose')"
            />
            <q-space />
            <q-btn
              :disable="issueMutation.isLoading.value"
              type="submit"
              flat
              label="Add Issue"
              v-close-popup
              color="dark"
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped></style>
